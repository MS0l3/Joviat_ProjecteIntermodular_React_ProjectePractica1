// src/Components/NavigationLayout.js
import React from "react";
import { View } from "react-native";
import TopBar from "./TopBar";
import BottomTabs from "./BottomTabs";
import { STYLES } from "../Styles/GlobalStyles";

export default function NavigationLayout({ children }) {
  return (
    <View style={STYLES.pantalla}>
      {/* 🔝 Barra superior */}
      <TopBar />

      {/* 📦 Contenido de las pantallas */}
      <View style={{ flex: 1 }}>{children}</View>

      {/* 🔻 Barra inferior */}
      <BottomTabs />
    </View>
  );
}
