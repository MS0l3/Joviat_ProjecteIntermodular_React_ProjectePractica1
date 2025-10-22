import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30',
    textAlign: 'center',
    flex: 1,
  },
  timeContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
  },
  // CONTORNO CON FONDO #CBD5E1
  formWrapper: {
    backgroundColor: '#CBD5E1',
    borderRadius: 12,
    padding: 2, // Esto crea el efecto de borde
  },
  formContainer: {
    backgroundColor: '#CBD5E1',
    borderRadius: 10,
    padding: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#FF3B30',
    backgroundColor: '#FFF5F5',
  },
  inputSuccess: {
    borderColor: '#4CD964',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 4,
  },
  loginErrorContainer: {
    backgroundColor: '#FFF5F5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B30',
  },
  loginErrorText: {
    color: '#FF3B30',
    fontSize: 14,
    textAlign: 'center',
  },
  forgotPasswordButton: {
    marginVertical: 15,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomSpace: {
    height: 50,
  },
});

export default styles;