// ============================================================================
// 🧭 DetalleScreen.js
// ✅ Muestra la información completa de una ubicación seleccionada.
// ============================================================================

import React from "react";
import { View, Text, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { STYLES } from "../Styles/GlobalStyles"; // 🎨 estilos globales

// ============================================================================
// 🧠 Reutilizamos la función de peligrosidad
// ============================================================================
const renderPeligrosidad = (nivel) => "▲".repeat(nivel);

// ============================================================================
// 🧱 COMPONENTE PRINCIPAL
// ============================================================================
export default function DetalleScreen({ route }) {
  // 📦 Recibimos los datos enviados desde la celda
  const {
    tipoCrimen = 1,
    peligrosidad = 3,
    ubicacion = "Ubicación no disponible",
    coordenadas = { lat: 41.3851, lng: 2.1734 },
  } = route.params || {};

  // 📋 Diccionario de tipos de crimen (igual que en CeldaMapa)
  const crimenes = {
    1: "Robo",
    2: "Asalto",
    3: "Vandalismo",
    4: "Fraude",
    5: "Incendio",
  };

  return (
    <ScrollView style={STYLES.pantalla}>
      {/* 🗺️ Mapa grande e interactivo */}
      <View style={STYLES.mapaDetalleContainer}>
        <MapView
          style={STYLES.mapaGrande}
          region={{
            latitude: coordenadas.lat,
            longitude: coordenadas.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          scrollEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
          pitchEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: coordenadas.lat,
              longitude: coordenadas.lng,
            }}
            pinColor="red"
            title={crimenes[tipoCrimen]}
          />
        </MapView>
      </View>

      {/* 📋 Información del crimen */}
      <View style={STYLES.detalleInfo}>
        <Text style={STYLES.detalleTitulo}>{crimenes[tipoCrimen]}</Text>
        <Text style={STYLES.textoPeligroDetalle}>
          Peligrosidad: {renderPeligrosidad(peligrosidad)}
        </Text>
        <Text style={STYLES.detalleUbicacion}>{ubicacion}</Text>

        {/* 🧾 Ejemplo de descripción (puedes sustituirla luego) */}
        <Text style={STYLES.detalleDescripcion}>
          Esta zona ha sido identificada como de riesgo por informes recientes.
          Se recomienda precaución al transitar por la zona, especialmente de
          noche o en condiciones de baja visibilidad.
        </Text>
      </View>
    </ScrollView>
  );
}
