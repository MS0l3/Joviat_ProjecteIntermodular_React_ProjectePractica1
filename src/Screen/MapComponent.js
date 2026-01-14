// MapComponent.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { PeligrosidadTriangulos } from '../Components/PeligrosidadTriangulos';

const { width, height } = Dimensions.get('window');

// Componente MarkerAnimado - SOLO CAMBIOS NECESARIOS
const MarkerAnimado = ({ post, isSelected, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // Animación de pulse al presionar (ORIGINAL)
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  };

  // Animación de pulse continua para marcadores seleccionados (ORIGINAL)
  React.useEffect(() => {
    if (isSelected) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(0);
    }
  }, [isSelected]);

  // ESTILOS DE ANIMACIÓN ORIGINALES
  const pulseStyle = {
    transform: [
      { 
        scale: pulseAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.2] // ORIGINAL
        }) 
      }
    ],
    opacity: pulseAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.7] // ORIGINAL
    })
  };

  const getMarkerColor = (peligrosidad) => {
    if (peligrosidad >= 4) return styles.markerPinAlto;
    if (peligrosidad === 3) return styles.markerPinMedio;
    return styles.markerPinBajo;
  };

  return (
    <Marker
      coordinate={{
        latitude: post.latitude,
        longitude: post.longitude
      }}
      onPress={handlePress}
    >
      {/* SOLO CAMBIO: Contenedor más grande para evitar cortes */}
      <View style={styles.markerOuterContainer}>
        {/* Anillo exterior para marcadores seleccionados (ORIGINAL) */}
        {isSelected && (
          <Animated.View 
            style={[
              styles.markerRing,
              pulseStyle,
              getMarkerColor(post.peligrosidad)
            ]} 
          />
        )}
        
        {/* Marcador principal con animación de scale (ORIGINAL) */}
        <Animated.View 
          style={[
            styles.markerPin,
            getMarkerColor(post.peligrosidad),
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          <View style={styles.markerDot} />
          
          {/* Icono interior según tipo de crimen (ORIGINAL) */}
          <View style={styles.markerIcon}>
            <Ionicons 
              name={getMarkerIcon(post.tipoCrimen)} 
              size={10} 
              color="white" 
            />
          </View>
        </Animated.View>
      </View>
    </Marker>
  );
};

// Función para obtener icono según tipo de crimen (ORIGINAL)
const getMarkerIcon = (tipoCrimen) => {
  const iconMap = {
    'Assassinat': 'skull',
    'Assetjament': 'alert-circle',
    'Robatori': 'bag-handle',
    'Baralles': 'warning',
    'Desordre public': 'people',
    'Vandalisme': 'build',
  };
  return iconMap[tipoCrimen] || 'warning';
};

// Componente Bombolla (ORIGINAL)
const Bombolla = ({ post, onClose, onObrir }) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  React.useEffect(() => {
    // Animación de entrada (ORIGINAL)
    Animated.spring(slideAnim, {
      toValue: 0,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View 
      style={[
        styles.bombollaContainer,
        { transform: [{ translateY: slideAnim }] } // ORIGINAL
      ]}
    >
      {/* Cabecera con tipo de crimen y peligrosidad (ORIGINAL) */}
      <View style={styles.bombollaHeader}>
        <Text style={styles.bombollaTitulo}>{post.tipoCrimen}</Text>
        <PeligrosidadTriangulos 
          nivel={post.peligrosidad} 
          size={18}
        />
      </View>

      {/* Ubicación en rojo (ORIGINAL) */}
      <Text style={styles.bombollaUbicacion}>{post.ubicacion}</Text>

      {/* Descripción del crimen (ORIGINAL) */}
      <Text style={styles.bombollaDescripcion}>
        {post.descripcion || `Incident de ${post.tipoCrimen.toLowerCase()} reportat a ${post.ubicacion}`}
      </Text>

      {/* Botón Obrir (ORIGINAL) */}
      <TouchableOpacity style={styles.botonObrir} onPress={onObrir}>
        <Text style={styles.botonObrirText}>Obrir</Text>
        <Ionicons name="arrow-forward" size={16} color="#FFF" />
      </TouchableOpacity>

      {/* Botón para cerrar (X) (ORIGINAL) */}
      <TouchableOpacity style={styles.botonCerrar} onPress={onClose}>
        <Ionicons name="close" size={20} color="#666" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function MapComponent({ posts = [], onMarkerPress }) {

  const mapRef = useRef(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  const handleMarkerPress = (post) => {
    setSelectedPost(post);
  };

  const handleMapPress = () => {
    setSelectedPost(null);
  };

  const handleCloseBombolla = () => {
    setSelectedPost(null);
  };

  const handleObrirPress = () => {
    if (onMarkerPress && selectedPost) {
      onMarkerPress(selectedPost);
    }
    handleCloseBombolla();
  };

  const focusOnUserLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: 41.3851,
        longitude: 2.1734,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress}
        showsUserLocation={true}
        showsMyLocationButton={false}
        loadingEnabled={true}
      >
        {posts.map((post) => {
          if (!post.coordenadas?.latitude) return null;

          return (
            <MarkerAnimado
              key={post.id}
              post={{
                ...post,
                latitude: post.coordenadas.latitude,
                longitude: post.coordenadas.longitude,
              }}
              isSelected={selectedPost?.id === post.id}
              onPress={() => handleMarkerPress(post)}
            />
          );
        })}
      </MapView>

      {/* Botón para centrar en ubicación del usuario (ORIGINAL) */}
      <TouchableOpacity 
        style={styles.locationButton}
        onPress={focusOnUserLocation}
      >
        <Ionicons name="locate" size={24} color="#B3261E" />
      </TouchableOpacity>

      {/* Bombolla (tarjeta informativa) (ORIGINAL) */}
      {selectedPost && (
        <Bombolla 
          post={selectedPost} 
          onClose={handleCloseBombolla}
          onObrir={handleObrirPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    borderRadius: 15,
    // SOLO CAMBIO: Eliminar overflow hidden
    // overflow: 'hidden', // ← ESTO ES LO ÚNICO QUE QUITAMOS
    marginHorizontal: 10,
    marginVertical: 5,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 15, // Mover borderRadius aquí para mantener el diseño
  },
  // SOLO CAMBIO: Contenedor más grande para los marcadores
  markerOuterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50, // Espacio suficiente para la animación
    height: 50,
  },
  // TODOS LOS DEMÁS ESTILOS SE MANTIENEN ORIGINALES
  markerRing: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    opacity: 0.3,
  },
  markerPin: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#B3261E',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    position: 'relative',
  },
  markerPinAlto: { backgroundColor: '#B3261E' },
  markerPinMedio: { backgroundColor: '#FF6B35' },
  markerPinBajo: { backgroundColor: '#4A90E2' },
  markerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  markerIcon: {
    position: 'absolute',
  },
  locationButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bombollaContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  bombollaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bombollaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  bombollaUbicacion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#B3261E',
    marginBottom: 12,
  },
  bombollaDescripcion: {
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