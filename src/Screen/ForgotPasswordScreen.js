import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/ForgotPasswordScreen.styles';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  // Validar formato de correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manejar cambio en el campo de correo
  const handleEmailChange = (text) => {
    setEmail(text);
    if (text && !validateEmail(text)) {
      setEmailError('Format de correu electrònic incorrecte');
    } else {
      setEmailError('');
    }
  };

  // Manejar el envío del correo de recuperación
  const handleSendEmail = () => {
    // Validaciones básicas
    if (!email) {
      setEmailError('Introdueix el teu correu electrònic');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Format de correu electrònic incorrecte');
      return;
    }

    // Simular envío de correo (éxito o error aleatorio para demo)
    const success = Math.random() > 0.3; // 70% de éxito
    setIsSuccess(success);
    setModalVisible(true);
  };

  // Manejar cierre del modal
  const handleCloseModal = () => {
    setModalVisible(false);
    if (isSuccess) {
      // Si fue exitoso, volver al login
      navigation.goBack();
    }
  };

  // Manejar cancelar
  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo real de la aplicación */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/Logo_DangerZone.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Formulario de recuperación con contorno #CBD5E1 */}
        <View style={styles.formWrapper}>
          <View style={styles.formContainer}>
            <Text style={styles.instructionText}>
              Introdueix el teu correu electrònic per restablir la contrasenya
            </Text>

            {/* Campo de correo electrónico */}
            <Text style={styles.label}>Correu electronic</Text>
            <TextInput
              style={[
                styles.input, 
                emailError ? styles.inputError : {},
              ]}
              placeholder="danger@danger.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            {/* Botones */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity 
                style={styles.cancelButton} 
                onPress={handleCancel}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancel·lar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.sendButton} 
                onPress={handleSendEmail}
                activeOpacity={0.8}
              >
                <Text style={styles.sendButtonText}>Restablir contrasenya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Espacio adicional para el teclado */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Modal de confirmación */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {isSuccess ? 'Correu enviat' : 'Error'}
              </Text>
              <Text style={styles.modalText}>
                {isSuccess 
                  ? `S'ha enviat un correu de restabliment a ${email}` 
                  : 'Hi ha hagut un error en enviar el correu. Torna a intentar-ho.'
                }
              </Text>
              <TouchableOpacity 
                style={[
                  styles.modalButton,
                  isSuccess ? styles.modalSuccessButton : styles.modalErrorButton
                ]} 
                onPress={handleCloseModal}
                activeOpacity={0.8}
              >
                <Text style={styles.modalButtonText}>
                  {isSuccess ? 'Acceptar' : 'Tornar a intentar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;