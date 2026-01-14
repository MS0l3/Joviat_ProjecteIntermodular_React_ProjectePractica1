// ============================================================================
// ✅ ListaComponent.js — FIX WARNING KEYS
// ============================================================================

import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from "../Styles/Style_TapTopBar";
import CeldaMapa from "./CeldaMapa";

export default function ListaComponent({
  data = [],
  filtro = "",
  onItemPress,
}) {
  const dataFiltrada = data.filter(
    (item) =>
      item?.ubicacion &&
      item.ubicacion.toLowerCase().includes(filtro.toLowerCase())
  );

  if (dataFiltrada.length === 0) {
    return (
      <View style={styles.listaContainer}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No hay resultados
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.listaContainer}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {dataFiltrada.map((item, index) => {
          // 🔑 KEY SEGURO
          const key = item.id ?? `${item.ubicacion}-${index}`;

          return (
            <TouchableOpacity
              key={key}
              style={styles.celdaWrapper}
              activeOpacity={0.85}
              onPress={() =>
                onItemPress?.({
                  postId: item.id,
                  ubicacion: item.ubicacion,
                  peligrosidad: item.peligrosidad,
                  tipoCrimen: item.tipoCrimen,
                  coordenadas: item.coordenadas,
                  descripcion: item.descripcion ?? "",
                  tags: item.tags ?? [],
                  imagenes: item.imagenes ?? [],
                })
              }
            >
              <CeldaMapa
                postId={item.id}  // 👈 CLAVE
                tipoCrimen={item.tipoCrimen}
                peligrosidad={item.peligrosidad}
                ubicacion={item.ubicacion}
                coordenadas={item.coordenadas}
                imagenes={item.imagenes ?? []}
                descripcion={item.descripcion ?? ""}
                interactivo={false}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
