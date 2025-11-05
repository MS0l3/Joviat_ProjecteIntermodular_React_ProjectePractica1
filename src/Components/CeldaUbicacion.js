// ============================================================================
// 📁 CeldaUbicacion.js
// ✅ Celda reutilizable para mostrar mapa + nombre + peligrosidad
// ============================================================================

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { STYLES } from "../Styles/GlobalStyles";
import { CrimeTypes } from "./CrimeTypes";

// ✅ Función para generar triángulos según nivel
const renderPeligrosidad = (nivel) => "▲".repeat(nivel);

export default function CeldaUbicacion({
  TipoCrimen,
  peligrosidad,
  ubicacion,
  coordenadas,
}) {
  const navigation = useNavigation();

  // ✅ Acción al pulsar la celda
  const handlePress = () => {
    navigation.navigate("DetalleUbicacion", { ubicacion, coordenadas });  // 👈 Aquí pones la pantalla destino
  };

  return (
    <TouchableOpacity style={STYLES.celda} onPress={handlePress}>

      {/* 🗺️ Mini mapa */}
      <MapView
        style={STYLES.mapaMini}
        initialRegion={{
          latitude: coordenadas.lat,
          longitude: coordenadas.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        <Marker coordinate={{ latitude: coordenadas.lat, longitude: coordenadas.lng }} />
      </MapView>

      {/* 📍 Nombre del crimen */}
      <Text style={STYLES.textoNombre}>
        {CrimeTypes[TipoCrimen] || "Sense dades"}
      </Text>

      {/* ⚠️ Nivel de peligro */}
      <Text style={STYLES.textoPeligro}>
        {renderPeligrosidad(peligrosidad)}
      </Text>

    </TouchableOpacity>
  );
}

// ✅ Valores por defecto
CeldaUbicacion.defaultProps = {
  TipoCrimen: 1,
  peligrosidad: 3,
  ubicacion: "Desconegut",
  coordenadas: { lat: 41.72, lng: 1.83 }, // Manresa ejemplo
};
