// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Style_TapTopBar.js";
import preferitsStyles from "../Styles/Style_elsMeusPosts.js";
import Celda from "../Components/Celda.js";

export default function elsMeusPosts() {
  console.log("🔄 Render de elsMeusPosts. isSettingsMode = ", isSettingsMode);
  const navigation = useNavigation();

  // 💡 CONSTANTE RETROCESO
  // Cambia esto a "true" cuando quieras mostrar el modo AJUSTES (⚙️)
  const isSettingsMode = false; // ← canvia a true per veure l’engranatge

  // 🔄 FUNCIONALIDAD DEL BOTÓN SUPERIOR IZQUIERDO
  const handleButtonPress = () => {
    if (isSettingsMode) {
      navigation.navigate("Configuracio");
    } else {
      navigation.goBack();
    }
  };

  // 🔹 NOMBRE DE LAS PANTALLAS
  const pantallaMarca = "Pantalla_TapTopBar";
  const pantallaUsuario = "Usuari";

  // 🔹 ESTADO DE LA TABBAR
  const [selectedTab, setSelectedTab] = useState("");

  // 🔹 DATOS DE EJEMPLO
  const [postsPreferits, setPostsPreferits] = useState([
    { id: '1', tipoCrimen: 'Assassinat', peligrosidad: 5, ubicacion: 'C/ Casavendrals 45', imagenUrl: 'https://picsum.photos/200/200?random=1' },
    { id: '2', tipoCrimen: 'Assetjament', peligrosidad: 5, ubicacion: 'C/ Legalitos 152', imagenUrl: 'https://picsum.photos/200/200?random=2' },
    { id: '3', tipoCrimen: 'Robatori', peligrosidad: 4, ubicacion: 'C/ de les Puntañes, 15', imagenUrl: 'https://picsum.photos/200/200?random=3' },
  ]);

  // 🔹 FUNCIÓN PARA MANEJAR EL CLICK EN UNA CELDA
  const handlePressCelda = (item) => {
    console.log('Celda presionada:', item);
    // navigation.navigate("Pantalla_PostDetalle", { postId: item.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* -------------------------------------------------------------
         🟥 CABECERA SUPERIOR
      ------------------------------------------------------------- */}
      <View style={styles.headerContainer}>
        {/* ⬅️ BOTÓN ENRERE / AJUSTES */}
        <TouchableOpacity
          style={[styles.settingsButton,styles.redButton]}
          onPress={handleButtonPress}
        >
          <Ionicons
            name={isSettingsMode ? "settings-outline" : "arrow-back-outline"}
            size={24}
            color="white"
          />
        </TouchableOpacity>

        {/* 🔸 BOTÓN MARCA */}
        <TouchableOpacity
          style={styles.botonMarca}
          onPress={() => navigation.navigate(pantallaMarca)}
        >
          <Text style={styles.textoMarca}>DangerZone</Text>
        </TouchableOpacity>

        {/* 👤 BOTÓN USUARIO */}
        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate(pantallaUsuario)}
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* -------------------------------------------------------------
         🏷️ TÍTOL “ELS MEUS POSTS”
      ------------------------------------------------------------- */}
      <Text style={preferitsStyles.titol}>Els meus posts</Text>

      {/* -------------------------------------------------------------
         📍 CONTINGUT PRINCIPAL - LLISTA DE POSTS
      ------------------------------------------------------------- */}
      <View style={styles.mainContent}>
        <View style={preferitsStyles.recuadroLista}>
          {postsPreferits.length > 0 ? (
            <FlatList
              data={postsPreferits}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Celda
                  tipoCrimen={item.tipoCrimen}
                  peligrosidad={item.peligrosidad}
                  ubicacion={item.ubicacion}
                  imagenUrl={item.imagenUrl}
                  onPress={() => handlePressCelda(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={preferitsStyles.listaContent}
            />
          ) : (
            <View style={preferitsStyles.emptyState}>
              <Text style={preferitsStyles.emptyStateText}>
                Encara no tens cap post guardat als preferits
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* -------------------------------------------------------------
         🔻 MENÚ INFERIOR (TABBAR)
      ------------------------------------------------------------- */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "Explorar" && styles.tabButtonActivo]}
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
            style={[styles.tabText, selectedTab === "Explorar" && styles.tabTextActivo]}
          >
            Explorar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "Preferits" && styles.tabButtonActivo]}
          onPress={() => setSelectedTab("Preferits")}
        >
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={selectedTab === "Preferits" ? "#B3261E" : "#000"}
          />
          <Text
            style={[styles.tabText, selectedTab === "Preferits" && styles.tabTextActivo]}
          >
            Preferits
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === "AfegirAlertes" && styles.tabButtonActivo]}
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
            style={[styles.tabText, selectedTab === "AfegirAlertes" && styles.tabTextActivo]}
          >
            Afegir Alertes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
