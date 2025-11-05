import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "expo-maps";
import { globalStyles } from "../Styles/GlobalStyles";
import NavigationLayout from "../Components/NavigationLayout";

const CeldaMapa = ({ TipoCrimen, peligrosidad, ubicacion, coordenadas }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("DetalleUbicacion", { ubicacion, coordenadas });
  };

  return (
    <TouchableOpacity style={globalStyles.celda} onPress={handlePress}>
      <MapView style={globalStyles.mapaMini} initialRegion={{
        latitude: coordenadas.lat,
        longitude: coordenadas.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
        <Marker coordinate={{ latitude: coordenadas.lat, longitude: coordenadas.lng }} />
      </MapView>

      <Text style={globalStyles.textoNombre}>{ubicacion}</Text>
      <Text style={globalStyles.textoPeligro}>{'▲'.repeat(peligrosidad)}</Text>
    </TouchableOpacity>
  );
};

export default CeldaMapa;
