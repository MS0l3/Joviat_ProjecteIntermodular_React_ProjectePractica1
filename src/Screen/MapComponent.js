// MapComponent.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { PeligrosidadTriangulos } from './PeligrosidadTriangulos';

const { width, height } = Dimensions.get('window');

// Componente MarkerAnimado - SOLUCIÓN AL PROBLEMA DEL CONTENEDOR
const MarkerAnimado = ({ post, isSelected, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
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

  const pulseStyle = {
    transform: [
      { 
        scale: pulseAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.2]
        }) 
      }
    ],
    opacity: pulseAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.7]
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
      // SOLUCIÓN: Usar tracksViewChanges para forzar actualizaciones
      tracksViewChanges={false}
    >
      {/* SOLUCIÓN: Contenedor absoluto que escape las limitaciones del Marker */}
      <View style={styles.markerAbsoluteContainer}>
        {/* Anillo exterior - POSICIONADO ABSOLUTAMENTE */}
        {isSelected && (
          <Animated.View 
            style={[
              styles.markerRingAbsolute, // Estilo absoluto
              pulseStyle,
              getMarkerColor(post.peligrosidad)
            ]} 
          />
        )}
        
        {/* Marcador principal - CENTRADO EN EL PUNTO DEL MAPA */}
        <Animated.View 
          style={[
            styles.markerPinCentered, // Centrado en el punto del mapa
            getMarkerColor(post.peligrosidad),
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          <View style={styles.markerDot} />
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

// Función para obtener icono según tipo de crimen
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

// Componente Bombolla (sin cambios)
const Bombolla = ({ post, onClose, onObrir }) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  React.useEffect(() => {
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
        { transform: [{ translateY: slideAnim }] }
      ]}
    >
      <View style={styles.bombollaHeader}>
        <Text style={styles.bombollaTitulo}>{post.tipoCrimen}</Text>
        <PeligrosidadTriangulos 
          nivel={post.peligrosidad} 
          size={18}
        />
      </View>

      <Text style={styles.bombollaUbicacion}>{post.ubicacion}</Text>

      <Text style={styles.bombollaDescripcion}>
        {post.descripcion || `Incident de ${post.tipoCrimen.toLowerCase()} reportat a ${post.ubicacion}`}
      </Text>

      <TouchableOpacity style={styles.botonObrir} onPress={onObrir}>
        <Text style={styles.botonObrirText}>Obrir</Text>
        <Ionicons name="arrow-forward" size={16} color="#FFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonCerrar} onPress={onClose}>
        <Ionicons name="close" size={20} color="#666" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function MapComponent() {
  const mapRef = useRef(null);
  const [selectedPost, setSelectedPost] = useState(null);

  // Datos de ejemplo
  const locations = [
    {
      id: '1',
      tipoCrimen: 'Assassinat',
      peligrosidad: 5,
      ubicacion: 'C/ Carrer Casavendrals 45',
      descripcion: 'Incident greu reportat recentment a la zona, s\'ha obert una investigació.',
      imagenUrl: 'https://picsum.photos/200/200?random=1',
      latitude: 41.3851,
      longitude: 2.1734,
    },
    {
      id: '2',
      tipoCrimen: 'Assetjament',
      peligrosidad: 5,
      ubicacion: 'C/ Carrer Legalitos 152',
      descripcion: 'Cas d\'assetjament reportat per veïns de la zona, es recomana extremar la precaució.',
      imagenUrl: 'https://picsum.photos/200/200?random=2',
      latitude: 41.3874,
      longitude: 2.1686,
    },
    {
      id: '3',
      tipoCrimen: 'Robatori',
      peligrosidad: 4,
      ubicacion: 'C/ Carrer de las puntañas, 15',
      descripcion: 'Robatori amb força a establiment comercial, es busca a sospitós.',
      imagenUrl: 'https://picsum.photos/200/200?random=3',
      latitude: 41.3865,
      longitude: 2.1665,
    },
    {
      id: '4',
      tipoCrimen: 'Baralles',
      peligrosidad: 3,
      ubicacion: 'C/ Cami del mirasol',
      descripcion: 'Altercado públic entre diversos individus, ja intervingut per les autoritats.',
      imagenUrl: null,
      latitude: 41.3848,
      longitude: 2.1702,
    },
    {
      id: '5',
      tipoCrimen: 'Desordre public',
      peligrosidad: 3,
      ubicacion: 'C/ Carretera San Martí',
      descripcion: 'Disturbis i desordre públic a la via, es recomana evitar la zona.',
      imagenUrl: 'https://picsum.photos/200/200?random=4',
      latitude: 41.3839,
      longitude: 2.1721,
    },
    {
      id: '6',
      tipoCrimen: 'Vandalisme',
      peligrosidad: 2,
      ubicacion: 'C/ Avinguda Diagonal 600',
      descripcion: 'Actes vandàlics a propietat pública, es busquen testimonis.',
      imagenUrl: 'https://picsum.photos/200/200?random=5',
      latitude: 41.3882,
      longitude: 2.1715,
    }
  ];

  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  const handleMarkerPress = (post) => {
    console.log('Marker pressed:', post.tipoCrimen);
    setSelectedPost(post);
  };

  const handleMapPress = () => {
    setSelectedPost(null);
  };

  const handleCloseBombolla = () => {
    setSelectedPost(null);
  };

  const handleObrirPress = () => {
    console.log('Abrir post:', selectedPost.id);
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
        {locations.map((location) => (
          <MarkerAnimado
            key={location.id}
            post={location}
            isSelected={selectedPost?.id === location.id}
            onPress={() => handleMarkerPress(location)}
          />
        ))}
      </MapView>

      <TouchableOpacity 
        style={styles.locationButton}
        onPress={focusOnUserLocation}
      >
        <Ionicons name="locate" size={24} color="#B3261E" />
      </TouchableOpacity>

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
    width: '100%',
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  // SOLUCIÓN: Contenedor absoluto que escapa las limitaciones del Marker
  markerAbsoluteContainer: {
    position: 'relative',
    width: 80,  // Área más grande para las animaciones
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Anillo con posición absoluta dentro del contenedor
  markerRingAbsolute: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    opacity: 0.3,
    top: 20,  // Centrado en el área de 80x80
    left: 20,
  },
  // Marcador centrado en el punto exacto del mapa
  markerPinCentered: {
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
    // Centrado en el punto del mapa (40,40 en el contenedor de 80x80)
    position: 'absolute',
    top: 28,
    left: 28,
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