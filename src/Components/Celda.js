import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './Celda.styles';

const Celda = ({ 
  tipoCrimen, 
  peligrosidad, 
  ubicacion, 
  imagenUrl, 
  onPress 
}) => {
  
  // Función para generar los triángulos de peligrosidad
  const renderPeligrosidad = (nivel) => {
    const numTriangulos = nivel;
    return '▲'.repeat(numTriangulos);
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Contenedor principal de la celda */}
      <View style={styles.celdaContent}>
        
        {/* Sección de imagen */}
        <View style={styles.imagenContainer}>
          {imagenUrl ? (
            <Image 
              source={{ uri: imagenUrl }}
              style={styles.imagen}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.imagenPlaceholder}>
              <Text style={styles.placeholderText}>IMG</Text>
            </View>
          )}
        </View>

        {/* Sección de información */}
        <View style={styles.infoContainer}>
          {/* Tipo de crimen y peligrosidad */}
          <View style={styles.crimenContainer}>
            <Text style={styles.tipoCrimen}>{tipoCrimen}</Text>
            <Text style={styles.peligrosidad}>
              {renderPeligrosidad(peligrosidad)}
            </Text>
          </View>

          {/* Ubicación */}
          <Text style={styles.ubicacion}>{ubicacion}</Text>
        </View>

      </View>

      {/* Separador */}
      <View style={styles.separador} />
    </TouchableOpacity>
  );
};

// Valores por defecto
Celda.defaultProps = {
  tipoCrimen: 'Crimen',
  peligrosidad: 3,
  ubicacion: 'Ubicación no disponible',
  imagenUrl: null,
  onPress: () => {}
};

export default Celda;