// src/Components/TopBar.js
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { STYLES } from "../Styles/GlobalStyles";

export default function TopBar() {
  const navigation = useNavigation();
  const route = useRoute();

  const topAction = () => {
    // si estás en Settings vuelve, si no abre ajustes
    if (route.name === "Settings") navigation.goBack();
    else navigation.navigate("Settings");
  };

  return (
    <View style={STYLES.headerContainer}>
      <TouchableOpacity style={STYLES.redButton} onPress={topAction}>
        <Ionicons name={route.name === "Settings" ? "arrow-back" : "settings-outline"} size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={STYLES.botonMarca}>
        <Text style={STYLES.textoMarca}>DangerZone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={STYLES.botonUsuario}>
        <Ionicons name="person-circle-outline" size={26} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
