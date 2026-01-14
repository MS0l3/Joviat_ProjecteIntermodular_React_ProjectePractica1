// ============================================================================
// ✅ Pantalla_TapTopBar.js — VERSION ESTABLE (layout original)
// ============================================================================

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import ListaScreen from "../Components/ListaComponent";
import styles from "../Styles/Style_TapTopBar";
import { getPosts } from "../Components/PostService";

export default function Pantalla_TapTopBar() {
  const navigation = useNavigation();

  // 🔹 TAB INFERIOR
  const [selectedTab, setSelectedTab] = useState("Explorar");

  // 🔹 SWITCH MAPA / LISTA
  const [switchSeleccion, setSwitchSeleccion] = useState("Llista");

  // 🔹 BUSCADOR
  const [searchText, setSearchText] = useState("");

  // 🔹 POSTS
  const [posts, setPosts] = useState([]);

  // ⚙️ MODO AJUSTES (rueda)
  const isSettingsMode = true;

  useEffect(() => {
    const cargarPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    cargarPosts();
  }, []);

  const handleButtonPress = () => {
    navigation.navigate("Pantalla_Ajustes");
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* ================= HEADER ================= */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[styles.redButton, styles.settingsButton]}
          onPress={handleButtonPress}
        >
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#555" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ciudad..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#777"
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Ionicons name="close-circle" size={18} color="#777" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate("Usuari")}
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* ================= SWITCH ================= */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            switchSeleccion === "Mapa" && styles.switchButtonActivo,
          ]}
          onPress={() => setSwitchSeleccion("Mapa")}
        >
          <Text
            style={[
              styles.switchText,
              switchSeleccion === "Mapa" && styles.switchTextActivo,
            ]}
          >
            Mapa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.switchButton,
            switchSeleccion === "Llista" && styles.switchButtonActivo,
          ]}
          onPress={() => setSwitchSeleccion("Llista")}
        >
          <Text
            style={[
              styles.switchText,
              switchSeleccion === "Llista" && styles.switchTextActivo,
            ]}
          >
            Llista
          </Text>
        </TouchableOpacity>
      </View>

      {/* ================= CONTENIDO ================= */}
      <View style={styles.mainContent}>
        {switchSeleccion === "Mapa" ? (
          <Text style={{ marginTop: 20 }}>Aquí irá el mapa</Text>
        ) : (
          <ListaScreen
            data={posts}
            filtro={searchText}
            onItemPress={(item) =>
              navigation.navigate("DetalleScreen", item)
            }
          />
        )}
      </View>

      {/* ================= TAB BAR ================= */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Explorar" && styles.tabButtonActivo,
          ]}
          onPress={() => {
            setSelectedTab("Explorar");
            navigation.navigate("Pantalla_TapTopBar");
          }}
        >
          <Ionicons
            name="location-outline"
            size={20}
            color={selectedTab === "Explorar" ? "#B3261E" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === "Explorar" && styles.tabTextActivo,
            ]}
          >
            Explorar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Preferits" && styles.tabButtonActivo,
          ]}
          onPress={() => {
            setSelectedTab("Preferits");
            navigation.navigate("Pantalla_Preferits");
          }}
        >
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={selectedTab === "Preferits" ? "#B3261E" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === "Preferits" && styles.tabTextActivo,
            ]}
          >
            Preferits
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "AfegirAlertes" && styles.tabButtonActivo,
          ]}
          onPress={() => {
            setSelectedTab("AfegirAlertes");
            navigation.navigate("AfegirPerills");
          }}
        >
          <Ionicons
            name="add-circle-outline"
            size={22}
            color={selectedTab === "AfegirAlertes" ? "#B3261E" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === "AfegirAlertes" && styles.tabTextActivo,
            ]}
          >
            Afegir Alertes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
