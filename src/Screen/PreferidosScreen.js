import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Celda from '../Components/Celda';

// Datos de ejemplo basados en la imagen
const datosPreferidos = [
  {
    id: '1',
    tipoCrimen: 'Assassinat',
    peligrosidad: 7,
    ubicacion: 'C/ Carrer Casavendrals 45',
    imagenUrl: null
  },
  {
    id: '2',
    tipoCrimen: 'Assetjament',
    peligrosidad: 5,
    ubicacion: 'C/ Carrer Legalitos 152',
    imagenUrl: null
  },
  {
    id: '3',
    tipoCrimen: 'Robatori',
    peligrosidad: 4,
    ubicacion: 'C/ Carrer de las puntañas, 15',
    imagenUrl: null
  },
  {
    id: '4',
    tipoCrimen: 'Baralles',
    peligrosidad: 3,
    ubicacion: 'C/ Cami del mirasol',
    imagenUrl: null
  },
  {
    id: '5',
    tipoCrimen: 'Desordre public',
    peligrosidad: 3,
    ubicacion: 'C/ Carretera San Martí',
    imagenUrl: null
  }
];

const PreferidosScreen = () => {
  const handlePressCelda = (item) => {
    console.log('Celda presionada:', item);
    // Aquí iría la navegación a la pantalla del post detallado
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>DangerZone</Text>
      </View>

      {/* Lista de preferidos */}
      <FlatList
        data={datosPreferidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Celda
            tipoCrimen={item.tipoCrimen}
            peligrosidad={item.peligrosidad}
            ubicacion={item.ubicacion}
            imagenUrl={item.imagenUrl}
            onPress={() => handlePressCelda(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContent}
      />

      {/* Footer con botones (placeholder) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Explorar    Preferits    Afegir Alertes</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  listaContent: {
    paddingBottom: 80, // Espacio para el footer
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default PreferidosScreen;