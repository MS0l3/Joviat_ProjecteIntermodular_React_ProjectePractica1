import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  celdaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  imagenContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  imagenPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 12,
    color: '#999',
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  crimenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  tipoCrimen: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  peligrosidad: {
    fontSize: 14,
    color: '#FF3B30',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  ubicacion: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginLeft: 76, // 60 (imagen) + 16 (margin)
  },
});

export default styles;