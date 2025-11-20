// src/Screen/DetalleScreen.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
// IMPORTA estilos exactamente como exportes tu fichero de estilos
// Si exportas default: import styles from "../Styles/Style_TapTopBar";
import styles from "../Styles/Style_TapTopBar";

// helper triángulos
const renderPeligrosidad = (nivel) => {
  const n = Math.min(Math.max(Number(nivel) || 1, 1), 5);
  return "▲".repeat(n);
};

export default function DetalleScreen({ route, navigation }) {
  // Protege contra route undefined
  const params = route?.params ?? {};

  // Default seguro si no vienen params
  const tipoCrimen = params.tipoCrimen ?? 1;
  const peligrosidad = params.peligrosidad ?? 3;
  const ubicacion = params.ubicacion ?? "Ubicación no disponible";
  const coordenadasRaw = params.coordenadas ?? {};
  // Acepta {lat,lng} o {latitude,longitude}
  const latitude = coordenadasRaw.latitude ?? coordenadasRaw.lat ?? 41.3851;
  const longitude = coordenadasRaw.longitude ?? coordenadasRaw.lng ?? 2.1734;

  const crimenes = {
    1: "Robo",
    2: "Asalto",
    3: "Vandalismo",
    4: "Fraude",
    5: "Incendio",
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FEF7FF" }}>
      <View style={styles.mapaDetalleContainer || { height: 300 }}>
        <MapView
          style={styles.mapaGrande || { flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={false}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            pinColor="red"
            title={crimenes[tipoCrimen] ?? "Lugar"}
          />
        </MapView>
      </View>

      <View style={styles.detalleInfo || { padding: 16 }}>
        <Text style={styles.detalleTitulo || { fontSize: 20, fontWeight: "700", textAlign: "center", color: "#B3261E" }}>
          {crimenes[tipoCrimen] ?? "Desconocido"}
        </Text>

        <Text style={styles.textoPeligroDetalle || { color: "#FFB300", textAlign: "center", marginVertical: 8 }}>
          {`Peligrosidad: ${renderPeligrosidad(peligrosidad)}`}
        </Text>

        <Text style={styles.detalleUbicacion || { textAlign: "center", marginBottom: 8 }}>
          {ubicacion}
        </Text>

        <Text style={styles.detalleDescripcion || { lineHeight: 20 }}>
          Información adicional sobre la zona. (Texto de ejemplo — cámbialo por datos reales).
        </Text>
      </View>
    </ScrollView>
  );
}
