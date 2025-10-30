// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA BASE
// -------------------------------------------------------------
// Estos imports son necesarios para el funcionamiento general de la pantalla
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Para los iconos (ojo, engranaje, usuario, etc.)
import styles from "../Styles/Style_TapTopBar.js"; // Estilos separados en su archivo propio
import Celda from "./Celda"; //Componente de las celdas

// -------------------------------------------------------------

export default function Pantalla_TapTopBar() {
  const navigation = useNavigation();

   // 💡 CONSTANTE RETROCESO
  // Cambia esto a "true" cuando quieras mostrar el modo AJUSTES
  const isSettingsMode = true; // ← Cambia a true para activar el engranaje o a "false" para activar el modo go.back

  // 🔄 FUNCIONALIDAD DINÁMICA DEL BOTÓN
  const handleButtonPress = () => {
    if (isSettingsMode) {
      // Si está en modo ajustes, te lleva a la pantalla de ajustes
      navigation.navigate("configuracio"); // 👈 cambia aquí el nombre
    } else {
      // Si está en modo retroceso, simplemente vuelve atrás
      navigation.goBack();
    }
  };
  // 🔹 NOMBRE DE LA PANTALLA A LA QUE LLEVA EL BOTÓN DE LA MARCA:
  const pantallaMarca = "Pantalla_Principal"; // 👉 cambia este nombre según tu pantalla principal

  // 🔹 NOMBRE DE LA PANTALLA DEL USUARIO:
  const pantallaUsuario = "Pantalla_Usuario"; // 👉 cambia este nombre según corresponda

  // 🔹 ESTADO DE LA TABBAR: selecciona cuál está activo
  const [selectedTab, setSelectedTab] = useState("Explorar");
  // opciones posibles: "Explorar", "Preferits", "AfegirAlertes"

  // 🔹 SWITCH MAPA/LISTA:
  const [switchSeleccion, setSwitchSeleccion] = useState("Mapa");
  // -------------------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      {/* -------------------------------------------------------------
         🟥 CABECERA SUPERIOR (Botón Rojo + Marca + Usuario)
         Contiene: Botón retroceso/ajustes, logo con texto y botón usuario
      ------------------------------------------------------------- */}
      <View style={styles.headerContainer}>
        {/* 🔴 BOTÓN ROJO DINÁMICO (Retroceso / Ajustes) */}
      <TouchableOpacity
        style={[
          styles.redButton,
          isSettingsMode && styles.settingsButton, // cambia el estilo si es modo ajustes
        ]}
        onPress={handleButtonPress}
      >
        <Ionicons
          name={isSettingsMode ? "settings-outline" : "arrow-back"}
          size={24}
          color={isSettingsMode ? "black" : "white"}
        />
      </TouchableOpacity>

        {/* 🔸 BOTÓN INVISIBLE DE LA MARCA */}
        <TouchableOpacity
          style={styles.botonMarca}
          onPress={() => navigation.navigate(pantallaMarca)} // 👉 aquí puedes cambiar el destino
        >
          <Text style={styles.textoMarca}>DangerZone</Text>
        </TouchableOpacity>

        {/* 👤 BOTÓN USUARIO */}
        <TouchableOpacity
          style={styles.botonUsuario}
          onPress={() => navigation.navigate(pantallaUsuario)} // 👉 cambia el destino aquí
        >
          <Ionicons name="person-circle-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* -------------------------------------------------------------
         ⚙️ SWITCH MAPA / LLISTA
         Permite cambiar entre dos vistas o pantallas.
         Cuando uno está seleccionado, tiene borde blanco y fondo gris.
      ------------------------------------------------------------- */}
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

      {/* -------------------------------------------------------------
         📍 CONTENIDO PRINCIPAL
         Aquí puedes añadir lo que quieras según la pantalla.
         Este espacio cambia entre pantallas.
      ------------------------------------------------------------- */}
      {/* ✅ CONTENEDOR SCROLLABLE DE 3 COLS */}
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}>
          
          {/* ✅ EJEMPLOS DE CELDAS */}
          <Celda TipoCrimen={1} peligrosidad={3} lat={41.39} lon={2.17} navigateTo="DetalleMapa"/>
          <Celda TipoCrimen={2} peligrosidad={4} lat={41.40} lon={2.15} navigateTo="DetalleMapa"/>
          <Celda TipoCrimen={5} peligrosidad={2} lat={41.41} lon={2.16} navigateTo="DetalleMapa"/>
          <Celda TipoCrimen={4} peligrosidad={5} lat={41.42} lon={2.18} navigateTo="DetalleMapa"/>
          <Celda TipoCrimen={3} peligrosidad={1} lat={41.43} lon={2.12} navigateTo="DetalleMapa"/>

        </ScrollView>
      </View>

      {/* -------------------------------------------------------------
         🔻 MENÚ INFERIOR (TABBAR)
         3 botones: Explorar | Preferits | Afegir Alertes
         Cada uno navega a una pantalla distinta.
         Usa la variable "selectedTab" para saber cuál está activo.
      ------------------------------------------------------------- */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Explorar" && styles.tabButtonActivo,
          ]}
          onPress={() => {
            setSelectedTab("Explorar");
            navigation.navigate("Pantalla_Explorar"); // 👉 cambia el nombre si es otra pantalla
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
            selectedTab === "Preferits" && styles.tabButtonActivo
          ]}
          onPress={() => {
            setSelectedTab("Preferits");
            navigation.navigate("Pantalla_Preferits"); // 👉 cambia el destino aquí
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
              selectedTab === "Preferits" && styles.tabTextActivo
            ]}
          >
            Preferits
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "AfegirAlertes" && styles.tabButtonActivo
          ]}
          onPress={() => {
            setSelectedTab("AfegirAlertes");
            navigation.navigate("Pantalla_AfegirAlertes"); // 👉 cambia el destino aquí
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
              selectedTab === "AfegirAlertes" && styles.tabTextActivo
            ]}
          >
            Afegir Alertes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
