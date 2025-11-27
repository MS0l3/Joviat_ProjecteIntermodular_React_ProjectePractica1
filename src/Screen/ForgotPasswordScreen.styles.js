import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -80,
    marginTop: -10,
  },
  logo: {
    width: 380,
    height: 400,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  // CONTORNO CON FONDO #CBD5E1
  formWrapper: {
    backgroundColor: '#CBD5E1',
    borderRadius: 12,
    padding: 2,
    marginHorizontal: 10,
  },
  formContainer: {
    backgroundColor: '#CBD5E1',
    borderRadius: 10,
    padding: 20,
  },
  instructionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
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
    borderColor: '#B3261E',
    backgroundColor: '#FFF5F5',
  },
  errorText: {
    color: '#B3261E',
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#6B7280',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    marginRight: 6,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  sendButton: {
    flex: 2,
    backgroundColor: '#B3261E',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 6,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomSpace: {
    height: 30,
  },
  // Estilos del Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#CBD5E1',
    borderRadius: 12,
    padding: 2,
    marginHorizontal: 20,
    width: '80%',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B3261E',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#B3261E',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    minWidth: 120,
  },
  modalSuccessButton: {
    backgroundColor: '#4CD964',
  },
  modalErrorButton: {
    backgroundColor: '#B3261E',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;