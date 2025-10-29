// ✅ IMPORTS PRINCIPALES PARA ESTA PANTALLA BASE
// -------------------------------------------------------------
// Estos imports son necesarios para el funcionamiento general de la pantalla
import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Para los iconos (ojo, engranaje, usuario, etc.)
import styles from "../Styles/Style_TapTopBar.js"; // Estilos separados en su archivo propio
// -------------------------------------------------------------

export default function Pantalla_TapTopBar() {
  const navigation = useNavigation();

  // -------------------------------------------------------------
  // 🧩 VARIABLES DE CONFIGURACIÓN RÁPIDA
  // Aquí puedes cambiar los valores fácilmente según la pantalla donde copies esto

  // 🔹 BOTÓN ROJO SUPERIOR IZQUIERDO:
  // Cambia "retroceso" por "ajustes" para que cambie el icono automáticamente
  const botonRojoTipo = "retroceso"; // opciones: "retroceso" | "ajustes"

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
        {/* 🔴 BOTÓN ROJO (RETROCESO o AJUSTES)
            Cambia su icono dependiendo del valor de "botonRojoTipo"
        */}
        <TouchableOpacity
          style={styles.botonRojo}
          onPress={() =>
            botonRojoTipo === "retroceso"
              ? navigation.goBack()
              : navigation.navigate("Pantalla_Ajustes") // 👉 cambia si tu pantalla de ajustes tiene otro nombre
          }
        >
          {botonRojoTipo === "retroceso" ? (
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          ) : (
            <Ionicons name="settings-outline" size={24} color="#000" />
          )}
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
      <View style={styles.mainContent}>
        <Text style={{ textAlign: "center", color: "#000" }}>
          Contenido de la pantalla aquí
        </Text>
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
