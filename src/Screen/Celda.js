import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
  Alert
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from '../Styles/Style_Celda.js';

const Celda = ({ 
  tipoCrimen, 
  peligrosidad, 
  ubicacion, 
  imagenUrl, 
  onPress 
}) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderPeligrosidad = (nivel) => {
    return '⚠️️️️️️️️'.repeat(nivel);
  };

  const handleImageLoadStart = () => {
    setImageLoading(true);
    setImageError(false);
  };

  const handleImageLoadEnd = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const handlePress = () => {
    // Mostrar el popup/modal
    setModalVisible(true);
    
    // También ejecutar la función onPress si existe (para compatibilidad)
    if (onPress) {
      onPress({
        tipoCrimen,
        peligrosidad,
        ubicacion,
        imagenUrl
      });
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleViewDetails = () => {
    setModalVisible(false);
    Alert.alert(
      "Navegación",
      `Aquí navegaríamos a la pantalla de detalles de: ${tipoCrimen}`,
      [{ text: "OK" }]
    );
  };

  return (
    <>
      <TouchableOpacity 
        style={styles.container} 
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={styles.celdaContent}>
          {/* Imagen a la IZQUIERDA */}
          {imagenUrl && (
            <View style={styles.imagenContainer}>
              {imageLoading && (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="small" color="#B3261E" />
                </View>
              )}
              <Image 
                source={{ uri: imagenUrl }}
                style={[
                  styles.imagen,
                  imageLoading && styles.hiddenImage
                ]}
                resizeMode="cover"
                onLoadStart={handleImageLoadStart}
                onLoadEnd={handleImageLoadEnd}
                onError={handleImageError}
              />
            </View>
          )}

          {/* Información en el CENTRO */}
          <View style={styles.infoContainer}>
            <View style={styles.crimenContainer}>
              <Text style={styles.tipoCrimen}>{tipoCrimen}</Text>
              <Text style={styles.peligrosidad}>
                {renderPeligrosidad(peligrosidad)}
              </Text>
            </View>
            <Text style={styles.ubicacion}>{ubicacion}</Text>
          </View>

          {/* Flecha a la DERECHA */}
          <View style={styles.flechaContainer}>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </View>
      </TouchableOpacity>

      {/* MODAL/POPUP */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              
              {/* Header del modal */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{tipoCrimen}</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              {/* Contenido del modal */}
              <View style={styles.modalBody}>
                {imagenUrl && (
                  <View style={styles.modalImagenContainer}>
                    <Image 
                      source={{ uri: imagenUrl }}
                      style={styles.modalImagen}
                      resizeMode="cover"
                    />
                  </View>
                )}
                
                <View style={styles.modalInfo}>
                  <View style={styles.modalPeligrosidad}>
                    <Text style={styles.modalPeligrosidadLabel}>Nivell de perill:</Text>
                    <Text style={styles.modalPeligrosidadValue}>
                      {renderPeligrosidad(peligrosidad)}
                    </Text>
                  </View>
                  
                  <View style={styles.modalUbicacion}>
                    <Text style={styles.modalUbicacionLabel}>Ubicació:</Text>
                    <Text style={styles.modalUbicacionText}>{ubicacion}</Text>
                  </View>
                </View>
              </View>

              {/* Botones del modal */}
              <View style={styles.modalActions}>
                <TouchableOpacity 
                  style={styles.modalButtonSecondary}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.modalButtonSecondaryText}>Tancar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.modalButtonPrimary}
                  onPress={handleViewDetails}
                >
                  <Text style={styles.modalButtonPrimaryText}>Veure Detalls</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
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