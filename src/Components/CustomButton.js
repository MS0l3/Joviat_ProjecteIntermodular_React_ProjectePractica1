// src/components/CustomButton.js
// ✅ Botón reutilizable para toda la app

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles";

export default function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
