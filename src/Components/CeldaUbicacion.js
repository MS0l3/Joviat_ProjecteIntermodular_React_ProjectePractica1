// ============================================================================
// ✅ COMPONENTES REUTILIZABLES PARA PANTALLAS DE MAPA / LISTA
//    Aquí guardamos los componentes que se usarán en muchas pantallas.
// ============================================================================

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/MapaStyles";

// ============================================================================
// ✅ DICCIONARIO DE CRÍMENES (REUTILIZABLE)
//    Cambia los nombres aquí y afecta a TODAS las pantallas
// ============================================================================
export const tiposCrimen = {
  1: "Robo con violencia",
  2: "Secuestro",
  3: "Asesinato",
  4: "Terrorismo",
  5: "Atentado grave",
};

// ============================================================================
// ✅ FUNCIÓN PARA GENERAR TRIÁNGULOS DE PELIGROSIDAD
//    "▲".repeat(n) → muestra tantos triangulitos como nivel haya
// ============================================================================
export const renderPeligrosidad = (nivel) => "▲".repeat(nivel);

// ============================================================================
// ✅ COMPONENTE: Celda de Mapa / Ubicación
//    - Se usa en grids de 3x línea
//    - Mapa, nombre, peligrosidad, click abre detalles
//    ⚠️ Cambiar pantalla destino en prop "onPressNavigate"
// ============================================================================
export const Celda = ({
  TipoCrimen = 1,
  peligrosidad = 3,
  ubicacion = "Ubicación no disponible",
  onPressNavigate = () => console.log("⚠️ Falta pantalla destino"),
}) => {
  return (
    <TouchableOpacity style={styles.celdaContainer} onPress={onPressNavigate}>
      
      {/* 🗺️ MAPA — placeholder hasta activar react-native-maps */}
      <View style={styles.fakeMap}>
        <Text style={{ fontSize: 22 }}>📍</Text>
      </View>

      {/* 📍 Nombre ubicación */}
      <Text style={styles.textUbicacion}>{ubicacion}</Text>

      {/* 🔺 Tipo crimen + Triángulos */}
      <Text style={styles.textPeligro}>
        {tiposCrimen[TipoCrimen]} {renderPeligrosidad(peligrosidad)}
      </Text>

    </TouchableOpacity>
  );
};

// ============================================================================
// ✅ COMPONENTE: Switch Mapa / Lista
//    - Botón doble reutilizable
//    ⚠️ Necesita props para gestionar estado desde fuera
// ============================================================================
export const SwitchMapaLista = ({ modoMapa, setModoMapa }) => {
  return (
    <View style={styles.switchWrapper}>
        
      {/* Botón Mapa */}
      <TouchableOpacity 
        style={modoMapa ? styles.btnOn : styles.btnOff}
        onPress={() => setModoMapa(true)}
      >
        <Text style={modoMapa ? styles.textOn : styles.textOff}>Mapa</Text>
      </TouchableOpacity>

      {/* Botón Lista */}
      <TouchableOpacity 
        style={!modoMapa ? styles.btnOn : styles.btnOff}
        onPress={() => setModoMapa(false)}
      >
        <Text style={!modoMapa ? styles.textOn : styles.textOff}>Lista</Text>
      </TouchableOpacity>

    </View>
  );
};
