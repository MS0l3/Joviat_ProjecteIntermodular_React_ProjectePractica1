// ============================================================================
// 📄 TestScreen.js
// ============================================================================
// ✅ Pantalla temporal para mostrar el grid de celdas de mapa
// Muestra 3 celdas por fila, con scroll vertical.
// ============================================================================

import React from "react";
import { ScrollView, View } from "react-native";
import { STYLES } from "../Styles/GlobalStyles";
import CeldaMapa from "../Components/CeldaMapa";

export default function TestScreen() {
  return (
    // 🔹 Scroll vertical para ver todas las filas
    <ScrollView style={STYLES.pantalla} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* 🔹 Contenedor de la cuadrícula */}
      <View style={STYLES.gridContainer}>
        {/* 🔹 Cada celda ocupa aprox. 1/3 del ancho */}
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={2} peligrosidad={4} />
        <CeldaMapa tipoCrimen={3} peligrosidad={5} />
        <CeldaMapa tipoCrimen={4} peligrosidad={3} />
        <CeldaMapa tipoCrimen={5} peligrosidad={1} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={3} peligrosidad={3} />
        <CeldaMapa tipoCrimen={2} peligrosidad={5} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={2} peligrosidad={4} />
        <CeldaMapa tipoCrimen={3} peligrosidad={5} />
        <CeldaMapa tipoCrimen={4} peligrosidad={3} />
        <CeldaMapa tipoCrimen={5} peligrosidad={1} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={3} peligrosidad={3} />
        <CeldaMapa tipoCrimen={2} peligrosidad={5} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={2} peligrosidad={4} />
        <CeldaMapa tipoCrimen={3} peligrosidad={5} />
        <CeldaMapa tipoCrimen={4} peligrosidad={3} />
        <CeldaMapa tipoCrimen={5} peligrosidad={1} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={3} peligrosidad={3} />
        <CeldaMapa tipoCrimen={2} peligrosidad={5} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={2} peligrosidad={4} />
        <CeldaMapa tipoCrimen={3} peligrosidad={5} />
        <CeldaMapa tipoCrimen={4} peligrosidad={3} />
        <CeldaMapa tipoCrimen={5} peligrosidad={1} />
        <CeldaMapa tipoCrimen={1} peligrosidad={2} />
        <CeldaMapa tipoCrimen={3} peligrosidad={3} />
        <CeldaMapa tipoCrimen={2} peligrosidad={5} />
      </View>
    </ScrollView>
  );
}
