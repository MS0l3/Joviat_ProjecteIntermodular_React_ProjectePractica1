// ============================================================================
// ✅ ListaComponent.js
// Componente reutilizable que muestra una cuadrícula de ubicaciones
// con sus celdas de mapa, nombres y niveles de peligrosidad.
// ----------------------------------------------------------------------------
// Este componente puede importarse en cualquier pantalla, incluyendo TapTopBar.
// ============================================================================

import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import styles from "../Styles/Style_TapTopBar"; // Estilos globales
import CeldaMapa from "./CeldaMapa"; // Componente de cada celda individual
import DetalleScreen from "../Screen/DetalleScreen" // Detalle peligros

// ============================================================================
// 📍 DATOS TEMPORALES DE EJEMPLO (puedes sustituir por tus datos reales)
// ============================================================================
const ubicacionesDemo = [
  { id: 1, tipoCrimen: 1, peligrosidad: 2, ubicacion: "Barcelona", coordenadas: { latitude: 41.3851, longitude: 2.1734 } },
  { id: 2, tipoCrimen: 2, peligrosidad: 4, ubicacion: "Madrid", coordenadas: { latitude: 40.4168, longitude: -3.7038 } },
  { id: 3, tipoCrimen: 3, peligrosidad: 3, ubicacion: "València", coordenadas: { latitude: 39.4699, longitude: -0.3763 } },
  { id: 4, tipoCrimen: 5, peligrosidad: 5, ubicacion: "Sevilla", coordenadas: { latitude: 37.3891, longitude: -5.9845 } },
  { id: 5, tipoCrimen: 4, peligrosidad: 1, ubicacion: "Bilbao", coordenadas: { latitude: 43.263, longitude: -2.935 } },
  { id: 6, tipoCrimen: 2, peligrosidad: 3, ubicacion: "Zaragoza", coordenadas: { latitude: 41.6488, longitude: -0.8891 } },
  { id: 7, tipoCrimen: 1, peligrosidad: 2, ubicacion: "Granada", coordenadas: { latitude: 37.1773, longitude: -3.5986 } },
  { id: 8, tipoCrimen: 3, peligrosidad: 4, ubicacion: "Málaga", coordenadas: { latitude: 36.7213, longitude: -4.4214 } },
  { id: 9, tipoCrimen: 2, peligrosidad: 1, ubicacion: "Málaga", coordenadas: { latitude: 40.8456, longitude: -5.2523 } },
  { id: 10, tipoCrimen: 2, peligrosidad: 3, ubicacion: "Zaragoza", coordenadas: { latitude: 41.6488, longitude: -0.8891 } },
  { id: 11, tipoCrimen: 1, peligrosidad: 2, ubicacion: "Granada", coordenadas: { latitude: 37.1773, longitude: -3.5986 } },
  { id: 12, tipoCrimen: 3, peligrosidad: 4, ubicacion: "Málaga", coordenadas: { latitude: 36.7213, longitude: -4.4214 } },
  { id: 13, tipoCrimen: 2, peligrosidad: 1, ubicacion: "Málaga", coordenadas: { latitude: 40.8456, longitude: -5.2523 } },
  
];

// ============================================================================
// 🔎 COMPONENTE FILTRADO POR UBICACIÓN - Fltrado de ciudades
// ============================================================================

const datosFiltrados = datos.filter((item) =>
  item.ubicacion.toLowerCase().includes(filtro.toLowerCase())
);


// ============================================================================
// 🧠 COMPONENTE PRINCIPAL — Lista de ubicaciones
// ============================================================================
export default function ListaComponent({ data = ubicacionesDemo, onItemPress }) {
  return (
    <View style={styles.listaContainer}>
      {/* Scroll vertical para todas las celdas */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {dataFiltrada.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.celdaWrapper}
            onPress={() =>
              onItemPress?.({
                ubicacion: item.ubicacion,
                peligrosidad: item.peligrosidad,
                tipoCrimen: item.tipoCrimen,
                coordenadas: item.coordenadas,
              })
            }
            activeOpacity={0.85}
          >
            {/* Cada celda es su propio mapa + info */}
            <CeldaMapa
              tipoCrimen={item.tipoCrimen}
              peligrosidad={item.peligrosidad}
              ubicacion={item.ubicacion}
              coordenadas={item.coordenadas}
              interactivo={false}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
