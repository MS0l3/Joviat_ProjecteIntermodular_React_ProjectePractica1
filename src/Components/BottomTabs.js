// src/Components/BottomTabs.js
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { STYLES } from "../Styles/GlobalStyles";

/*
  IMPORTANTE:
  - Asegúrate que en App.js tus Stack.Screen usan exactamente estos names:
    "Mapa", "Lista", "AddAlert" (o cámbialos abajo)
  - Cambia etiquetas/texto/iconos aquí si quieres otro orden/labels.
*/

export default function BottomTabs() {
  const navigation = useNavigation();
  const route = useRoute();

  const go = (screen) => navigation.navigate(screen);
  const isActive = (screen) => route.name === screen;

  return (
    <View style={STYLES.tabBar}>
      {/* Botón 1: Explorar / Mapa */}
      <TouchableOpacity
        style={[STYLES.tabBtn, isActive("Mapa") && STYLES.tabBtnActive]}
        onPress={() => go("Mapa")}
      >
        <Ionicons name="location-outline" size={20} />
        <Text style={isActive("Mapa") ? STYLES.tabTextActive : STYLES.tabText}>Explorar</Text>
      </TouchableOpacity>

      {/* Botón 2: Preferits / Lista */}
      <TouchableOpacity
        style={[STYLES.tabBtn, isActive("Lista") && STYLES.tabBtnActive]}
        onPress={() => go("Lista")}
      >
        <Ionicons name="bookmark-outline" size={20} />
        <Text style={isActive("Lista") ? STYLES.tabTextActive : STYLES.tabText}>Preferits</Text>
      </TouchableOpacity>

      {/* Botón 3: Añadir alertas (puede ser modal o pantalla) */}
      <TouchableOpacity
        style={[STYLES.tabBtn, isActive("AddAlert") && STYLES.tabBtnActive]}
        onPress={() => go("AddAlert")}
      >
        <Ionicons name="add-circle-outline" size={20} />
        <Text style={isActive("AddAlert") ? STYLES.tabTextActive : STYLES.tabText}>Afegir</Text>
      </TouchableOpacity>
    </View>
  );
}
