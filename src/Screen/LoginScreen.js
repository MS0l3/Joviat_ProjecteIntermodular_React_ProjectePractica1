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
import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [firebaseErrorModal, setFirebaseErrorModal] = useState(false);

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
    setLoginError('');
  };

  // Manejar cambio en el campo de contraseña
  const handlePasswordChange = (text) => {
    setPassword(text);
    if (passwordError) setPasswordError('');
    setLoginError('');
  };

  // Manejar el proceso de inicio de sesión
  const handleLogin = () => {
    // Validaciones básicas
    if (!email) {
      setEmailError('Introdueix el teu correu electrònic');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Format de correu electrònic incorrecte');
      return;
    }
    
    if (!password) {
      setPasswordError('Introdueix la teva contrasenya');
      return;
    }

    // Simular error de credenciales (esto se quitará cuando conectes Firebase)
    setLoginError('El correu o la contrasenya són incorrectes');
  };

  // Navegar a la pantalla de recuperación de contraseña
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  // Mostrar error de conexión Firebase (para pruebas)
  const handleTestFirebaseError = () => {
    setFirebaseErrorModal(true);
  };

  // Cerrar modal de error Firebase
  const handleCloseFirebaseError = () => {
    setFirebaseErrorModal(false);
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

        {/* Formulario de inicio de sesión CON FONDO #CBD5E1 */}
        <View style={styles.formWrapper}>
          <View style={styles.formContainer}>
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

            {/* Campo de contraseña */}
            <Text style={styles.label}>Contrasenya</Text>
            <TextInput
              style={[
                styles.input, 
                passwordError ? styles.inputError : {},
              ]}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              autoCapitalize="none"
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            {/* Error de inicio de sesión */}
            {loginError ? (
              <View style={styles.loginErrorContainer}>
                <Text style={styles.loginErrorText}>{loginError}</Text>
              </View>
            ) : null}

            {/* Enlace para recuperar contraseña */}
            <TouchableOpacity 
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>T'has oblidat de la contrasenya?</Text>
            </TouchableOpacity>

            {/* Botón de acceso */}
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Text style={styles.loginButtonText}>Accedir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón de prueba para error Firebase */}
        <TouchableOpacity 
          style={styles.testButton} 
          onPress={handleTestFirebaseError}
          activeOpacity={0.8}
        >
          <Text style={styles.testButtonText}>Prova Error Firebase</Text>
        </TouchableOpacity>

        {/* Espacio adicional para el teclado */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Modal de error de conexión Firebase */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={firebaseErrorModal}
        onRequestClose={handleCloseFirebaseError}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Error de connexió</Text>
              <Text style={styles.modalText}>
                Error firebase etc
              </Text>
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={handleCloseFirebaseError}
                activeOpacity={0.8}
              >
                <Text style={styles.modalButtonText}>Acceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;