// src/Components/CeldaMapa.js
import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "../Styles/Style_TapTopBar";

export default function CeldaMapa({
  ubicacion = "Ubicación desconocida",
  peligrosidad = 3,
  tipoCrimen = 1,
  coordenadas = { latitude: 41.3851, longitude: 2.1734 },
  interactivo = false,
}) {
  // función para mostrar triángulos
  const renderPeligrosidad = (nivel) => "▲".repeat(nivel);

  // Diccionario de crimenes
  const crimenes = {
    1: "Robo",
    2: "Asalto",
    3: "Vandalismo",
    4: "Fraude",
    5: "Incendio",
  };

  return (
    <View style={styles.celda}>
      {/* Mapa miniatura */}
      <MapView
        style={{ width: "100%", height: 100 }}
        scrollEnabled={interactivo}
        zoomEnabled={interactivo}
        pitchEnabled={false}
        rotateEnabled={false}
        initialRegion={{
          latitude: coordenadas.lat || 41.3851,
          longitude: coordenadas.lng || 2.1734,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}

      >
        <Marker coordinate={coordenadas} title={crimenes[tipoCrimen]} />
      </MapView>

      {/* Nombre y peligrosidad */}
      <Text style={styles.textoNombre}>{crimenes[tipoCrimen]}</Text>
      <Text style={styles.textoPeligro}>{renderPeligrosidad(peligrosidad)}</Text>
    </View>
  );
}
