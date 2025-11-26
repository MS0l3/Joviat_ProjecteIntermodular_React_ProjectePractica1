// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA BASE
// -------------------------------------------------------------
// Estos imports son necesarios para el funcionamiento general de la pantalla
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Para los iconos (ojo, engranaje, usuario, etc.)
import styles from "../Styles/Style_TapTopBar.js";
import MapComponent from "./MapComponent"; // Estilos separados en su archivo propio
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
import ListaComponent from "../Components/ListaComponent.js";

// 📦 Importa la pantalla que irá dentro
//import ListaScreen from "../Components/ListaComponent.js"; // 👈 Ajusta si la ruta difiere


// ============================================================================
// 🧭 COMPONENTE PRINCIPAL
// ============================================================================
export default function Pantalla_TapTopBar() {
  const navigation = useNavigation();

   // 💡 CONSTANTE RETROCESO
  // Cambia esto a "true" cuando quieras mostrar el modo AJUSTES
  const isSettingsMode = true; // ← Cambia a true para activar el engranaje
  console.log("🧭 isSettingsMode és:", isSettingsMode);


  // 🔄 FUNCIONALIDAD DINÁMICA DEL BOTÓN
  const handleButtonPress = () => {
    if (isSettingsMode) {
      // Si está en modo ajustes, te lleva a la pantalla de ajustes
      navigation.navigate("Configuracio"); // 👈 cambia aquí el nombre
    } else {
      // Si está en modo retroceso, simplemente vuelve atrás
      navigation.goBack();
    }
  };
  // 🔹 NOMBRE DE LA PANTALLA A LA QUE LLEVA EL BOTÓN DE LA MARCA:
  const pantallaMarca = "Pantalla_TapTopBar"; // 👉 cambia este nombre según tu pantalla principal

  // 🔹 NOMBRE DE LA PANTALLA DEL USUARIO:
  const pantallaUsuario = "Usuari"; // 👉 cambia este nombre según corresponda

  // 🔹 ESTADO DE LA TABBAR: selecciona cuál está activo
  const [selectedTab, setSelectedTab] = useState("Explorar");

  // 🔄 Estado del switch superior (Mapa o Llista)
  const [switchSeleccion, setSwitchSeleccion] = useState("Llista");


// ========================================================================
// 🎛️ FUNCIONES DE NAVEGACIÓN
// ========================================================================

  const [searchText, setSearchText] = useState("");

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
            <MapComponent />
          ) : (
            <ListaComponent filtro={searchText} /> // ✅ Aquí se renderiza tu lista completa
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
