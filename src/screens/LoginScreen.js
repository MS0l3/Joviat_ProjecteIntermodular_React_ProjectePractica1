import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

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
    Alert.alert('Recuperar contrasenya', 'Aquesta funcionalitat estarà disponible aviat');
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
        {/* Header con logo */}
        <View style={styles.header}>
          <Text style={styles.title}>DANGER ZONE</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>9:30</Text>
          </View>
        </View>

        {/* Logo placeholder - Reemplazar con tu imagen en assets */}
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
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
                !emailError && email ? styles.inputSuccess : {}
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
                !passwordError && password ? styles.inputSuccess : {}
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

        {/* Espacio adicional para el teclado */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;