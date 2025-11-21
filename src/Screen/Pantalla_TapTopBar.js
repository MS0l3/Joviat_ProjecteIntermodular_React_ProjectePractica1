// ============================================================================
// ✅ Pantalla_TapTopBar.js
// Pantalla base que contiene:
// 1️⃣ Cabecera superior (TopBar)
// 2️⃣ Switch entre "Mapa" y "Llista"
// 3️⃣ Contenido principal (ListaScreen)
// 4️⃣ TabBar inferior
// ============================================================================

import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// 📦 Importa la pantalla que irá dentro
import ListaScreen from "../Components/ListaComponent.js"; // 👈 Ajusta si la ruta difiere

// 🎨 Estilos
import styles from "../Styles/Style_TapTopBar.js";

// ============================================================================
// 🧭 COMPONENTE PRINCIPAL
// ============================================================================
export default function Pantalla_TapTopBar() {
  const navigation = useNavigation();

  // 🔧 Estado de los botones inferiores
  const [selectedTab, setSelectedTab] = useState("Explorar");

  // 🔄 Estado del switch superior (Mapa o Llista)
  const [switchSeleccion, setSwitchSeleccion] = useState("Llista");

  // 💡 Estado para el botón rojo (modo ajustes o volver)
  const isSettingsMode = true;

// ========================================================================
// 🎛️ FUNCIONES DE NAVEGACIÓN
// ========================================================================
  const handleButtonPress = () => {
    if (isSettingsMode) navigation.navigate("Pantalla_Ajustes");
    else navigation.goBack();
  };

  const [searchText, setSearchText] = useState("");

  const pantallaMarca = "Pantalla_Principal";
  const pantallaUsuario = "Pantalla_Usuario";

  // ========================================================================
  // 🧱 INTERFAZ
  // ========================================================================
  return (
    <SafeAreaView style={[styles.container, { justifyContent: "space-between" }]}>
      {/* ======================================================
        🟥 CABECERA SUPERIOR (Botón, Marca, Usuario)
      ====================================================== */}
      <View style={styles.headerContainer}>
        {/* Botón rojo o de ajustes */}
        <TouchableOpacity
          style={[
            styles.redButton,
            isSettingsMode && styles.settingsButton,
          ]}
          onPress={handleButtonPress}
        >
          <Ionicons
            name={isSettingsMode ? "settings-outline" : "arrow-back"}
            size={24}
            color={isSettingsMode ? "#000" : "#FFF"}
          />
        </TouchableOpacity>

        {/* 🔍 Buscador de ciudades */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#555" style={{ marginRight: 6 }} />

          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ciudad..."
            placeholderTextColor="#777"
            value={searchText}
            onChangeText={setSearchText}
            autoCorrect={false}
            autoCapitalize="none"
          />

          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Ionicons name="close-circle" size={18} color="#777" />
            </TouchableOpacity>
          )}
        </View>

        {/* Botón Usuario */}
        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate(pantallaUsuario)}
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* ======================================================
        ⚙️ SWITCH MAPA / LLISTA
      ====================================================== */}
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

      {/* ======================================================
        📍 CONTENIDO PRINCIPAL (Lista o Mapa)
      ====================================================== */}
      <View style={styles.mainContent}>
        {switchSeleccion === "Mapa" ? (
          <Text style={{ color: "#000", marginTop: 20 }}>
            Aquí iría el mapa 🗺️
          </Text>
        ) : (
          <ListaScreen filtro={searchText} /> // ✅ Aquí se renderiza tu lista completa
        )}
      </View>
      {/* ======================================================
        🔻 TABBAR INFERIOR (Explorar | Preferits | Afegir)
      ====================================================== */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Explorar" && styles.tabButtonActivo,
          ]}
          onPress={() => {
            setSelectedTab("Explorar");
            navigation.navigate("Pantalla_Explorar");
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
            navigation.navigate("Pantalla_AfegirAlertes");
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
