// src/Screen/FavoritosScreen.js
import React from "react";
import { View, Text } from "react-native";
import { STYLES } from "../Styles/GlobalStyles";

export default function FavoritosScreen() {
  return (
    <View style={STYLES.pantalla}>
      <Text style={{ textAlign: "center", marginTop: 30, fontSize: 18 }}>
        Pantalla de favoritos ⭐ (placeholder)
      </Text>
    </View>
  );
}
