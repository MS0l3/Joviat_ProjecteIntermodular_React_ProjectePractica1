// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA BASE
// -------------------------------------------------------------
// Estos imports son necesarios para el funcionamiento general de la pantalla
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Para los iconos (ojo, engranaje, usuario, etc.)
import styles from "../Styles/Style_TapTopBar.js";
import MapComponent from "../Components/MapComponent.js";
import BackHandlerExit from "../Components/BackHandlerExit.js"; // Block para manejar el botón atrás en Android
import FiltroCrimenes from "../Components/FiltroCrimenes.js";
// -------------------------------------------------------------
// ============================================================================
// ✅ Pantalla_TapTopBar.js
// Pantalla base que contiene:
// 1️⃣ Cabecera superior (TopBar)
// 2️⃣ Switch entre "Mapa" y "Llista"
// 3️⃣ Contenido principal (ListaScreen)
// 4️⃣ TabBar inferior
// ============================================================================

import { SafeAreaView } from "react-native-safe-area-context";
import ListaScreen from "../Components/ListaComponent";
import { getPosts } from "../Components/PostService";

export default function Pantalla_TapTopBar() {
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState("Explorar");
  const [switchSeleccion, setSwitchSeleccion] = useState("Llista");
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const cargarPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    cargarPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ciudad..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pantalla_Usuario")}
        >
          <Ionicons name="person-circle-outline" size={26} />
        </TouchableOpacity>
      </View>

      {/* SWITCH */}
      <View style={styles.switchContainer}>
        {["Mapa", "Llista"].map((v) => (
          <TouchableOpacity
            key={v}
            style={[
              styles.switchButton,
              switchSeleccion === v && styles.switchButtonActivo,
            ]}
            onPress={() => setSwitchSeleccion(v)}
          >
            <Text>{v}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* CONTENIDO */}
      <View style={styles.mainContent}>
        {switchSeleccion === "Llista" && (
          <ListaScreen
            data={posts}
            filtro={searchText}
            onItemPress={(item) =>
              navigation.navigate("DetalleScreen", item)
            }
          />
        )}
      </View>

      {/* TABBAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setSelectedTab("Explorar")}>
          <Ionicons name="location-outline" size={20} />
          <Text>Explorar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pantalla_Preferits")}
        >
          <Ionicons name="bookmark-outline" size={20} />
          <Text>Preferits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pantalla_AfegirAlertes")}
        >
          <Ionicons name="add-circle-outline" size={22} />
          <Text>Afegir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}