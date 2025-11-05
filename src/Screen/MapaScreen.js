import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "../styles/MapaStyles";

// ⬇️ Import componentes reutilizables
import { Celda, SwitchMapaLista } from "../components/MapaComponents";

export default function MapaScreen() {
  const [modoMapa, setModoMapa] = useState(true);

  return (
    <View style={styles.container}>

      {/* 🔘 Switch Mapa / Lista */}
      <SwitchMapaLista modoMapa={modoMapa} setModoMapa={setModoMapa} />

      {/* 🧱 Grid de celdas */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        
        <Celda TipoCrimen={1} peligrosidad={2} ubicacion="Barcelona Centro" />
        <Celda TipoCrimen={3} peligrosidad={4} ubicacion="Esparreguera" />
        <Celda TipoCrimen={2} peligrosidad={1} ubicacion="Madrid" />

      </ScrollView>
      
    </View>
  );
}
