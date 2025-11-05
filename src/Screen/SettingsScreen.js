// src/screens/SettingsScreen.js
// ✅ Pantalla simple para ajustes

import React from "react";
import { View, Text } from "react-native";
import { STYLES } from "../Styles/GlobalStyles";

export default function SettingsScreen() {
  return (
    <NavigationLayout>
      <View style={STYLES.container}>
        <Text>Pantalla de ajustes</Text>
      </View>
  </NavigationLayout>

    );
}
