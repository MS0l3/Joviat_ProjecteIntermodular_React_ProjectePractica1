import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "../Styles/Style_CeldaComentari";

export default function CeldaComentari({ autor, comentari, hora }) {
  return (
    <SafeAreaView style={styles.celda}>
      <View style={styles.filaSuperior}>
        <Text style={styles.autor}>{autor}</Text>
        <Text style={styles.hora}>{hora}</Text>
      </View>
      <Text style={styles.comentari}>{comentari}</Text>
    </SafeAreaView>
  );
}
