// src/Components/CeldaMapa.js
// Componente CeldaMapa — ficha con mini-mapa + pie (tipo de crimen + peligrosidad)
// Si no se pasa prop onPress, usa navigation.navigate("Detalle", {...})
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { STYLES } from "../Styles/GlobalStyles";

// función auxiliar para triángulos de peligro
const renderPeligrosidad = (nivel) => {
  const n = Math.min(Math.max(Number(nivel) || 1, 1), 5);
  return "▲".repeat(n);
};

export default function CeldaMapa({
  ubicacion = "Ubicación no disponible",
  peligrosidad = 3,
  tipoCrimen = 1,
  coordenadas = { lat: 41.3851, lng: 2.1734 }, // por defecto Barcelona
  interactivo = false, // Si el mini-mapa debe permitir interacción
  onPress = null, // Función opcional que ejecuta la celda al pulsar
}) {
  // Diccionario de nombres de crimen (modifica a tu gusto)
  const crimenes = {
    1: "Robo",
    2: "Asalto",
    3: "Vandalismo",
    4: "Fraude",
    5: "Incendio",
  };

  // Hook de navegación — sólo se usa si no se pasa onPress desde fuera
  const navigation = useNavigation();

  // Función que se ejecuta al pulsar la celda:
  // - si onPress viene por props, la ejecuta
  // - si no, intenta navegar a la pantalla "Detalle" pasando los datos
  const handlePress = () => {
    if (typeof onPress === "function") {
      onPress();
      return;
    }

    // Navegación por defecto: cambiar "Detalle" por el name exacto de tu pantalla
    try {
      navigation.navigate("Detalle", {
        tipoCrimen,
        peligrosidad,
        ubicacion,
        coordenadas,
      });
    } catch (e) {
      // Si no hay navigation (ej. pruebas fuera de Navigator), sólo loguea
      console.log("Celda pulsada (no hay navigation):", {
        tipoCrimen,
        peligrosidad,
        ubicacion,
        coordenadas,
      });
    }
  };

  return (
    <TouchableOpacity
      style={STYLES.celda}
      activeOpacity={0.9}
      onPress={handlePress}
    >
      {/* contenedor del mapa (cuadrado) */}
      <View style={STYLES.mapaContainer}>
        <MapView
          style={STYLES.mapaMini}
          initialRegion={{
            latitude: coordenadas.lat,
            longitude: coordenadas.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          scrollEnabled={interactivo}
          zoomEnabled={interactivo}
          rotateEnabled={interactivo}
          pitchEnabled={interactivo}
          // si no interactivo, bloqueamos eventos táctiles para que el TouchableOpacity reciba el toque
          pointerEvents={interactivo ? "auto" : "none"}
        >
          <Marker
            coordinate={{ latitude: coordenadas.lat, longitude: coordenadas.lng }}
            pinColor="red"
          />
        </MapView>
      </View>

      {/* pie blanco con nombre y peligrosidad */}
      <View style={STYLES.celdaPie}>
        <Text style={STYLES.textoNombre}>{crimenes[tipoCrimen] || "Desconocido"}</Text>
        <Text style={STYLES.textoPeligro}>{renderPeligrosidad(peligrosidad)}</Text>
      </View>
    </TouchableOpacity>
  );
}
