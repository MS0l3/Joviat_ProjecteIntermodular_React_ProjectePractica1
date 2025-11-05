// src/screens/MapScreen.js
// ✅ Pantalla del mapa con react-native-maps funcionando

import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";
import { STYLES } from "../Styles/GlobalStyles";

export default function MapScreen() {
  return (
      <View style={STYLES.container}>
        <MapView
          style={STYLES.map}
          initialRegion={{
            latitude: 40.4168, // Madrid
            longitude: -3.7038,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={{ latitude: 40.4168, longitude: -3.7038 }}
                  title="Madrid" />
        </MapView>
      </View>
  );
}
