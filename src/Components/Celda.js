import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'; // ✅ Importado
import styles from '../Styles/Style_Celda.js';

const Celda = ({ item }) => {
  const navigation = useNavigation();

  const {
    id,
    tipoCrimen,
    peligrosidad,
    ubicacion,
    coordenadas,
    imagenUrl,
    imagenes,
    descripcion,
  } = item;

  
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(true);
    

  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleViewDetails = () => {
    setModalVisible(false);
    
    // Verificar que navigation existe antes de usarlo
    if (navigation) {
      // Si la pantalla DetalleScreen no existe, muestra un alert temporal
      navigation.navigate("DetalleScreen", {
        postId: item.id,
        ubicacion: item.ubicacion,
        peligrosidad: item.peligrosidad,
        tipoCrimen: item.tipoCrimen,
        coordenadas: item.coordenadas,
        imagenes: item.imagenes,
        descripcion: item.descripcion,
      });

    } else {
      console.log("Navigation no disponible");
      // Opcional: Mostrar un alert
      // Alert.alert("Info", "Navegación no disponible en este momento");
    }
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
              <View style={styles.peligrosidadContainer}>
                {renderPeligrosidad(peligrosidad)}
              </View>
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
                    <View style={styles.modalPeligrosidadIcons}>
                      {renderPeligrosidad(peligrosidad)}
                    </View>
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
 
};

export default Celda;