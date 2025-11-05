// src/Screen/AddAlertScreen.js
import React from "react";
import { View, Text } from "react-native";
import { STYLES } from "../Styles/GlobalStyles";

export default function AddAlertScreen() {
  return (
    <View style={STYLES.pantalla}>
      <Text style={{ textAlign: "center", marginTop: 30, fontSize: 18 }}>
        Pantalla para añadir alertas 🚨 (placeholder)
      </Text>
    </View>
  );
}
