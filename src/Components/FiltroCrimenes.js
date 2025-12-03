// =============================================
//  FiltroCrimenes.js — MENÚ FLOTANTE FUNCIONAL
// =============================================
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FiltroCrimenes({
  crimenesSeleccionados,
  setCrimenesSeleccionados,
}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const listaCrimenes = [
    { id: 1, nombre: "Robatori" },
    { id: 2, nombre: "Asalt" },
    { id: 3, nombre: "Vandalisme" },
    { id: 4, nombre: "Frau" },
    { id: 5, nombre: "Incendi" },
  ];

  // Alternar check
  const toggleCrimen = (id) => {
    if (crimenesSeleccionados.includes(id)) {
      setCrimenesSeleccionados(
        crimenesSeleccionados.filter((c) => c !== id)
      );
    } else {
      setCrimenesSeleccionados([...crimenesSeleccionados, id]);
    }
  };

  return (
    <View style={{ position: "relative" }}>
      {/* Botón redondo */}
      <TouchableOpacity
        style={styles.botonFiltro}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Ionicons name="filter-outline" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Menú flotante */}
      {menuVisible && (
        <View style={styles.menuFlotante}>
          {listaCrimenes.map((crimen) => (
            <TouchableOpacity
              key={crimen.id}
              style={styles.filaCrimen}
              onPress={() => toggleCrimen(crimen.id)}
            >
              <Text style={styles.textoCrimen}>{crimen.nombre}</Text>

              {/* Checkbox */}
              <View
                style={[
                  styles.checkbox,
                  crimenesSeleccionados.includes(crimen.id) && styles.checkboxActivo,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  botonFiltro: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#B3261E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  menuFlotante: {
    position: "absolute",
    top: 45,
    left: 0,
    backgroundColor: "#fff",
    padding: 10,
    width: 160,
    borderRadius: 10,
    elevation: 6, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 999, // LO MÁS IMPORTANTE
  },

  filaCrimen: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  textoCrimen: {
    color: "#000",
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#999",
  },

  checkboxActivo: {
    backgroundColor: "#B3261E",
    borderColor: "#B3261E",
  },
  
});
