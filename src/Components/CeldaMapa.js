// ============================================================================
// ✅ Componente: CeldaMapa
// 📍 Muestra un mapa pequeño con marcador, el tipo de crimen y la peligrosidad
// ============================================================================

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/Style_TapTopBar";
import Style_TapTopBar from "../Styles/Style_TapTopBar";
import { Ionicons } from '@expo/vector-icons';

export default function CeldaMapa({
  ubicacion = "Ubicación desconocida",
  peligrosidad = 3,
  tipoCrimen = 1,
  coordenadas = { latitude: 41.3851, longitude: 2.1734 }, // Barcelona por defecto
  interactivo = false,
}) {
  const navigation = useNavigation();

  // --------------------------------------------------------------------------
  // 🔹 Asegurar que las coordenadas siempre tengan latitude/longitude
  // (Por compatibilidad si se pasan como lat/lng)
  // --------------------------------------------------------------------------
  const safeCoords = {
    latitude: coordenadas.latitude ?? coordenadas.lat ?? 41.3851,
    longitude: coordenadas.longitude ?? coordenadas.lng ?? 2.1734,
  };

  // --------------------------------------------------------------------------
  // 🔹 Diccionario de tipos de crimen
  // --------------------------------------------------------------------------
  const crimenes = {
    1: "Robo",
    2: "Asalto",
    3: "Vandalismo",
    4: "Fraude",
    5: "Incendio",
  };

  // --------------------------------------------------------------------------
  // 🔹 Función auxiliar para renderizar peligrosidad
  // --------------------------------------------------------------------------
  const renderPeligrosidad = (nivel) => {
    const triangulos = [];
    for (let i = 0; i < 5; i++) {
      triangulos.push(
        <Ionicons
          key={i}
          name="warning"
          size={16}
          color={i < nivel ? "#B3261E" : "#CBD5E1"}
          style={styles.triangulo}
        />
      );
    }
    return triangulos;
  };

  // --------------------------------------------------------------------------
  // 🔹 Al pulsar una celda → ir a DetalleScreen con todos los datos
  // --------------------------------------------------------------------------
  const handlePress = () => {
    navigation.navigate("DetalleScreen", {
      ubicacion,
      peligrosidad,
      tipoCrimen,
      coordenadas: safeCoords,
    });
  };

  // --------------------------------------------------------------------------
  // 🔹 Render principal
  // --------------------------------------------------------------------------
  return (
    <TouchableOpacity style={styles.celda} onPress={handlePress}>
      {/* 🗺️ Mapa miniatura */}
      <MapView
        style={{ width: "100%", height: 100 }}
        scrollEnabled={interactivo}
        zoomEnabled={interactivo}
        pitchEnabled={false}
        rotateEnabled={false}
        pointerEvents={false} // evita interacción si no toca
        initialRegion={{
          latitude: safeCoords.latitude,
          longitude: safeCoords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker style={Style_TapTopBar.Marker}coordinate={safeCoords} title={crimenes[tipoCrimen]} />
      </MapView>

      {/* 📋 Nombre del crimen */}
      <Text style={styles.textoNombre}>{crimenes[tipoCrimen]}</Text>

      {/* ⚠️ Peligrosidad */}
      <Text style={styles.textoPeligro}>{renderPeligrosidad(peligrosidad)}</Text>
    </TouchableOpacity>
  );
}
