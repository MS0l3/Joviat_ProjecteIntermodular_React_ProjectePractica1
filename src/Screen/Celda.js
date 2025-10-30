// ✅ IMPORTS NECESARIOS PARA EL COMPONENTE CELDA
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps"; // 👈 Para el mapa
import { useNavigation } from "@react-navigation/native";

// ✅ LISTA DE TIPOS DE CRIMEN
// Cambias los nombres y se auto aplican según el número que pongas
const tiposCrimen = {
  1: "Baralles",
  2: "Assetjament",
  3: "Desordre Públic",
  4: "Assassinat",
  5: "Robatori",
};

// ✅ FUNCIÓN PARA MOSTRAR TRIÁNGULOS DE PELIGROSIDAD
// Se repite según el nivel pasado como prop
const renderPeligrosidad = (nivel) => "▲".repeat(nivel);

export default function Celda({
  // ✅ VARIABLES MODIFICABLES AL USAR EL COMPONENTE
  TipoCrimen,
  peligrosidad,
  ubicacion,
  lat,
  lon,
  navigateTo, // 👈 Nombre de pantalla a donde enviar al pulsar
}) {
  const navigation = useNavigation();

  return (
    // ✅ TODO EL BLOQUE ES CLICKABLE
    <TouchableOpacity
      style={styles.celdaContainer}
      onPress={() => navigation.navigate(navigateTo)} // 👈 Aquí navega
    >
      {/* ✅ CUADRADO DEL MAPA */}
      <View style={styles.mapaContainer}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          pointerEvents="none" // ❗ No deja mover el mapa en la lista
        >
          {/* ✅ MARCADOR ROJO AL CENTRO */}
          <Marker
            coordinate={{ latitude: lat, longitude: lon }}
            pinColor="red"
          />
        </MapView>
      </View>

      {/* ✅ TEXTO DEL NOMBRE DEL CRIMEN */}
      <Text style={styles.nombreCrimen}>{tiposCrimen[TipoCrimen]}</Text>

      {/* ✅ TEXTO DEL NIVEL DE PELIGRO */}
      <Text style={styles.peligrosidad}>{renderPeligrosidad(peligrosidad)}</Text>
    </TouchableOpacity>
  );
}

// ✅ VALORES POR DEFECTO
Celda.defaultProps = {
  TipoCrimen: 1,
  peligrosidad: 3,
  ubicacion: "Ubicación no disponible",
  lat: 41.38879, // BCN por defecto
  lon: 2.15899,
  navigateTo: "DetalleMapa", // 👈 Cambia esta pantalla si quieres
};

// ✅ ESTILOS
const styles = StyleSheet.create({
  celdaContainer: {
    width: "30%",  // 👈 3 por fila
    aspectRatio: 1.1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    margin: "1.5%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  mapaContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  nombreCrimen: {
    fontWeight: "bold",
    fontSize: 11,
    marginTop: 4,
    textAlign: "center",
  },
  peligrosidad: {
    color: "#d4a200",
    fontSize: 10,
  },
});
