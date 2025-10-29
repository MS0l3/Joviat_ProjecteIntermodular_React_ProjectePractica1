import React from 'react';
import { View, FlatList } from 'react-native';
import Celda from '../Celda.js';

// Datos de ejemplo
const datosEjemplo = [
  {
    id: '1',
    tipoCrimen: 'Assassinat',
    peligrosidad: 4,
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

const PantallaPreferidos = () => {
  const handlePressCelda = (item) => {
    console.log('Celda presionada:', item);
    // Navegar a la pantalla del post
    // navigation.navigate('Post', { postId: item.id });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={datosEjemplo}
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
      />
    </View>
  );
};

export default PantallaPreferidos;