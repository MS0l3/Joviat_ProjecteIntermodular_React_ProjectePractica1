// ============================================================================
// 📁 DetalleUbicacion.js
// ✅ Pantalla para ver una ubicación en grande al pulsar una celda
// ============================================================================

import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { STYLES } from "../Styles/GlobalStyles";

export default function DetalleUbicacion({ route }) {
  // ✅ Recibir datos desde la celda
  const { ubicacion, coordenadas } = route.params;

  return (
    <View style={STYLES.pantalla}>

      {/* 🗺️ MAPA GRANDE */}
      <MapView
        style={STYLES.mapaGrande}
        initialRegion={{
          latitude: coordenadas.lat,
          longitude: coordenadas.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: coordenadas.lat, longitude: coordenadas.lng }} />
      </MapView>

      {/* 📍 NOMBRE LUGAR */}
      <View style={STYLES.detalleInfo}>
        <Text style={STYLES.detalleTitulo}>{ubicacion}</Text>
      </View>

    </View>
  );
}
