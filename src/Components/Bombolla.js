// Bombolla.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Bombolla({ post, onClose }) {
  const navigation = useNavigation();

  // Función para manejar el botón "Obrir"
  const handleObrirPress = () => {
    // Navegar a la pantalla del post (ajusta el nombre según tu navegación)
    navigation.navigate("Pantalla_PostDetalle", { postId: post.id });
    onClose(); // Cerrar la bombolla después de navegar
  };

  // Función para renderizar los triángulos de peligrosidad
  const renderPeligrosidad = (nivel) => {
    const triangulos = [];
    for (let i = 0; i < 5; i++) {
      triangulos.push(
        <Ionicons
          key={i}
          name="warning"
          size={16}
          color={i < nivel ? "#B3261E" : "#CBD5E1"}
          style={styles.triangulo}
        />
      );
    }
    return triangulos;
  };

  return (
    <View style={styles.container}>
      {/* Cabecera con tipo de crimen y peligrosidad */}
      <View style={styles.header}>
        <Text style={styles.titulo}>{post.tipoCrimen}</Text>
        <View style={styles.peligrosidadContainer}>
          {renderPeligrosidad(post.peligrosidad)}
        </View>
      </View>

      {/* Ubicación en rojo */}
      <Text style={styles.ubicacion}>{post.ubicacion}</Text>

      {/* Descripción del crimen */}
      <Text style={styles.descripcion}>
        {post.descripcion || "Descripció no disponible"}
      </Text>

      {/* Botón Obrir */}
      <TouchableOpacity style={styles.botonObrir} onPress={handleObrirPress}>
        <Text style={styles.botonObrirText}>Obrir</Text>
        <Ionicons name="arrow-forward" size={16} color="#FFF" />
      </TouchableOpacity>

      {/* Botón para cerrar (X) */}
      <TouchableOpacity style={styles.botonCerrar} onPress={onClose}>
        <Ionicons name="close" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  peligrosidadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  triangulo: {
    marginLeft: 2,
  },
  ubicacion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#B3261E',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  botonObrir: {
    backgroundColor: '#B3261E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  botonObrirText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  botonCerrar: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },
});