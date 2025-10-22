import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Pantalla_Seleccion() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF8F7",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 30, color: "black" }}>
        Has denegat els termes i condicions
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#B3261E",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Tornar al registre
        </Text>
      </TouchableOpacity>
    </View>
  );
}
