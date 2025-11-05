// src/screens/ListScreen.js
// ✅ Pantalla Lista totalmente hecha

import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "../../styles";
import CustomButton from "../components/CustomButton";

const data = [
  { id: "1", name: "Lugar 1" },
  { id: "2", name: "Lugar 2" },
  { id: "3", name: "Lugar 3" },
];

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <CustomButton text="Refrescar" onPress={() => alert("Refrescado!")} />
    </View>
  );
}
