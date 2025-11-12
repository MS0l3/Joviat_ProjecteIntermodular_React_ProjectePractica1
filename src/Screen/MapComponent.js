// MapComponent.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function MapComponent() {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Datos de ejemplo para los marcadores (esto vendrá de Firebase más adelante)
  const locations = [
    {
      id: 1,
      title: "Assassinat",
      description: "Incident reportat recentment",
      latitude: 41.3851,
      longitude: 2.1734,
      type: "crime",
      severity: "high"
    },
    {
      id: 2,
      title: "AlcDonalu's",
      description: "Restaurant",
      latitude: 41.3874,
      longitude: 2.1686,
      type: "establishment"
    },
    {
      id: 3,
      title: "Sala d'Actes FUB-2",
      description: "Edifici universitari",
      latitude: 41.3865,
      longitude: 2.1665,
      type: "building"
    },
    {
      id: 4,
      title: "Supermercado",
      description: "Botiga",
      latitude: 41.3848,
      longitude: 2.1702,
      type: "establishment"
    },
    {
      id: 5,
      title: "C. Pepito no2",
      description: "Carrer residencial",
      latitude: 41.3839,
      longitude: 2.1721,
      type: "street"
    },
    {
      id: 6,
      title: "Clínica Dental Vf",
      description: "Centre mèdic",
      latitude: 41.3882,
      longitude: 2.1715,
      type: "establishment"
    }
  ];

  // Región inicial del mapa (Barcelona centro)
  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
  };

  const handleMapPress = () => {
    setSelectedLocation(null);
  };

  const focusOnUserLocation = () => {
    // En una implementación real, esto usaría la ubicación del usuario
    mapRef.current?.animateToRegion({
      latitude: 41.3851,
      longitude: 2.1734,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }, 1000);
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
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
            title={location.title}
            description={location.description}
            onPress={() => handleMarkerPress(location)}
          >
            <View style={styles.markerContainer}>
              <View style={[
                styles.markerPin,
                location.type === "crime" && styles.markerPinCrime
              ]}>
                <View style={styles.markerDot} />
              </View>
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Botón para centrar en ubicación del usuario */}
      <TouchableOpacity 
        style={styles.locationButton}
        onPress={focusOnUserLocation}
      >
        <Ionicons name="locate" size={24} color="#B3261E" />
      </TouchableOpacity>

      {/* Placeholder para la tarjeta informativa (se implementará en otra rama) */}
      {selectedLocation && (
        <View style={styles.infoCardPlaceholder}>
          <Text style={styles.infoCardText}>
            Component Bombolla - En desarrollo
          </Text>
          <Text style={styles.infoCardSubtext}>
            {selectedLocation.title}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  markerPinCrime: {
    backgroundColor: '#B3261E', // Rojo para crímenes
  },
  markerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  locationButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoCardPlaceholder: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FFF8F7',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B3261E',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoCardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B3261E',
    textAlign: 'center',
    marginBottom: 4,
  },
  infoCardSubtext: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});