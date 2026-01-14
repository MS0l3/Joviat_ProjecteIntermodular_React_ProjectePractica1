import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "../Styles/Style_CeldaComentari";
import { Timestamp } from "firebase/firestore";

export default function CeldaComentari({ autor, comentari, date }) {
  const formatDate = (date) => {
  if (!date) return "";
  if (date instanceof Timestamp) {
    return date.toDate().toLocaleString();
  }
  return date;
};
  return (
    <SafeAreaView style={styles.celda}>
      <View style={styles.filaSuperior}>
        <Text style={styles.autor}>{autor}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.comentari}>{comentari}</Text>
    </SafeAreaView>
  );
}
