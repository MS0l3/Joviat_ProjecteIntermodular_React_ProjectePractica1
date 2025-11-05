// ============================================================================
// 📁 ListScreen.js
// ✅ Renderiza una cuadrícula 3x∞ de celditas de ubicaciones
// ============================================================================

import React from "react";
import { View, ScrollView } from "react-native";
import { STYLES } from "../Styles/GlobalStyles";


import CeldaUbicacion from "../Components/CeldaUbicacion";

// ✅ Datos falsos para ver preview
const ubicaciones = [
  { id: 1, TipoCrimen: 1, peligrosidad: 2, lat: 41.72, lng: 1.83 },
  { id: 2, TipoCrimen: 2, peligrosidad: 3, lat: 41.73, lng: 1.84 },
  { id: 3, TipoCrimen: 3, peligrosidad: 1, lat: 41.71, lng: 1.82 },
  { id: 4, TipoCrimen: 4, peligrosidad: 5, lat: 41.74, lng: 1.86 },
  { id: 5, TipoCrimen: 5, peligrosidad: 4, lat: 41.75, lng: 1.81 },
];

export default function ListScreen() {
  return (
      <View style={STYLES.pantalla}>

        {/* 🧱 Grid scrollable */}
        <ScrollView contentContainerStyle={STYLES.gridContainer}>
          {ubicaciones.map((u) => (
            <CeldaUbicacion
              key={u.id}
              TipoCrimen={u.TipoCrimen}
              peligrosidad={u.peligrosidad}
              coordenadas={{ lat: u.lat, lng: u.lng }}
            />
          ))}
        </ScrollView>

      </View>
  );
}
