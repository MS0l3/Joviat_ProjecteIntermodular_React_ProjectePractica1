// PeligrosidadTriangulos.js
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * Componente reutilizable para mostrar triángulos de peligrosidad
 * @param {number} nivel - Nivel de peligrosidad (1-5)
 * @param {object} style - Estilos adicionales para el contenedor
 * @param {number} size - Tamaño de los iconos (por defecto 16)
 * @param {string} colorActivo - Color para triángulos activos (por defecto #B3261E)
 * @param {string} colorInactivo - Color para triángulos inactivos (por defecto #CBD5E1)
 */
export const PeligrosidadTriangulos = ({ 
  nivel, 
  style, 
  size = 16, 
  colorActivo = "#B3261E", 
  colorInactivo = "#CBD5E1" 
}) => {
  const triangulos = [];
  
  for (let i = 0; i < 5; i++) {
    triangulos.push(
      <Ionicons
        key={i}
        name="warning"
        size={size}
        color={i < nivel ? colorActivo : colorInactivo}
        style={styles.triangulo}
      />
    );
  }
  
  return (
    <View style={[styles.container, style]}>
      {triangulos}
    </View>
  );
};

/**
 * Función para obtener solo los triángulos (útil para usar en Textos)
 * @param {number} nivel - Nivel de peligrosidad (1-5)
 * @param {number} size - Tamaño de los iconos
 * @param {string} colorActivo - Color para triángulos activos
 * @param {string} colorInactivo - Color para triángulos inactivos
 */
export const getTriangulosPeligrosidad = (
  nivel, 
  size = 16, 
  colorActivo = "#B3261E", 
  colorInactivo = "#CBD5E1"
) => {
  const triangulos = [];
  
  for (let i = 0; i < 5; i++) {
    triangulos.push(
      <Ionicons
        key={i}
        name="warning"
        size={size}
        color={i < nivel ? colorActivo : colorInactivo}
        style={styles.triangulo}
      />
    );
  }
  
  return triangulos;
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  triangulo: {
    marginLeft: 2,
  },
};

export default PeligrosidadTriangulos;