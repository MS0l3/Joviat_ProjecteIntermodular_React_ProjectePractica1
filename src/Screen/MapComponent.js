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
      severity: "high",
      icon: "▲▲▲▲▲▲"
    },
    {
      id: 2,
      title: "AlcDonalu's",
      description: "Restaurant",
      latitude: 41.3874,
      longitude: 2.1686,
      type: "establishment",
      severity: "none"
    },
    {
      id: 3,
      title: "Sala d'Actes FUB-2",
      description: "Edifici universitari",
      latitude: 41.3865,
      longitude: 2.1665,
      type: "building",
      severity: "none"
    },
    {
      id: 4,
      title: "Supermercado",
      description: "Botiga",
      latitude: 41.3848,
      longitude: 2.1702,
      type: "establishment",
      severity: "none"
    },
    {
      id: 5,
      title: "C. Pepito no2",
      description: "Carrer residencial",
      latitude: 41.3839,
      longitude: 2.1721,
      type: "street",
      severity: "none"
    },
    {
      id: 6,
      title: "Clínica Dental Vf",
      description: "Centre mèdic",
      latitude: 41.3882,
      longitude: 2.1715,
      type: "establishment",
      severity: "none"
    }
  ];

  // Región inicial del mapa (Barcelona centro)
  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const getMarkerColor = (type, severity) => {
    if (type === "crime") {
      if (severity === "high") return "#B3261E"; // Rojo para crímenes graves
      return "#FF6B35"; // Naranja para otros incidentes
    }
    return "#4A90E2"; // Azul para establecimientos normales
  };

  const getMarkerIcon = (type) => {
    if (type === "crime") return "warning";
    if (type === "establishment") return "business";
    if (type === "building") return "business";
    return "location";
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
            <View style={[
              styles.markerContainer,
              { backgroundColor: getMarkerColor(location.type, location.severity) }
            ]}>
              <Ionicons 
                name={getMarkerIcon(location.type)} 
                size={16} 
                color="white" 
              />
              {location.icon && (
                <Text style={styles.markerIconText}>{location.icon}</Text>
              )}
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

      {/* Información del marcador seleccionado */}
      {selectedLocation && (
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>{selectedLocation.title}</Text>
          <Text style={styles.infoDescription}>{selectedLocation.description}</Text>
          {selectedLocation.type === "crime" && (
            <View style={styles.severityIndicator}>
              <Text style={styles.severityText}>Alta severitat</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  markerIconText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
    marginTop: 2,
  },
  locationButton: {
    position: 'absolute',
    top: 20,
    right: 20,
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
  infoCard: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B3261E',
    marginBottom: 4,
  },
  infoDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  severityIndicator: {
    backgroundColor: '#FFF8F7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  severityText: {
    fontSize: 12,
    color: '#B3261E',
    fontWeight: '600',
  },
});