import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F7',
    alignItems: 'center',
    paddingTop: 90,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#b91c1c', // Vermell fosc
    borderRadius: 6, // Arrodonit com a la imatge
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 1, // Petita vora fosca
    borderColor: '#7a0f0f',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4, // Ombra per Android
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 60,
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#CBD5E1',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginLeft: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#CBD5E1',
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
