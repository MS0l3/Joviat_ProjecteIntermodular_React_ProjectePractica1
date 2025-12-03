import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 2,
    marginVertical: 6,
    borderRadius: 12, // 👈 Bordes más redondeados
    overflow: 'hidden',
    // 👇 Sombra para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // 👇 Sombra para Android
    elevation: 5,
    // 👇 Borde sutil opcional
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  celdaContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16, // 👈 Un poco más de padding
    justifyContent: 'space-between',
  },
  imagenContainer: {
    width: 60,
    height: 60,
    borderRadius: 10, // 👈 Más redondeado
    marginRight: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  imagen: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
  },
  loadingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  hiddenImage: {
    opacity: 0,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  crimenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipoCrimen: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  peligrosidad: {
    fontSize: 12,
    color: '#ffffffff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  ubicacion: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  flechaContainer: {
    marginLeft: 12,
    padding: 4,
  },
  // 🪟 ESTILOS PARA EL MODAL/POPUP
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},

modalContainer: {
  backgroundColor: '#CBD5E1',
  borderRadius: 16,
  padding: 2,
  width: '90%',
  maxWidth: 400,
},

modalContent: {
  backgroundColor: '#fff',
  borderRadius: 14,
  padding: 0,
  overflow: 'hidden',
},

modalHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#e0e0e0',
},

modalTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#000',
  flex: 1,
},

modalBody: {
  padding: 20,
},

modalImagenContainer: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  overflow: 'hidden',
  marginBottom: 16,
  backgroundColor: '#f0f0f0',
},

modalImagen: {
  width: '100%',
  height: '100%',
},

modalInfo: {
  gap: 12,
},

modalPeligrosidad: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 8,
},

modalPeligrosidadLabel: {
  fontSize: 16,
  color: '#666',
  fontWeight: '500',
},

modalPeligrosidadValue: {
  fontSize: 18,
  color: '#B3261E',
  fontWeight: 'bold',
},

modalUbicacion: {
  paddingVertical: 8,
},

modalUbicacionLabel: {
  fontSize: 16,
  color: '#666',
  fontWeight: '500',
  marginBottom: 4,
},

modalUbicacionText: {
  fontSize: 16,
  color: '#000',
  fontWeight: '400',
  lineHeight: 20,
},

modalActions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 20,
  borderTopWidth: 1,
  borderTopColor: '#e0e0e0',
  gap: 12,
},

modalButtonSecondary: {
  flex: 1,
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  paddingVertical: 12,
  alignItems: 'center',
},

modalButtonSecondaryText: {
  fontSize: 16,
  color: '#666',
  fontWeight: '600',
},

modalButtonPrimary: {
  flex: 1,
  backgroundColor: '#B3261E',
  borderRadius: 8,
  paddingVertical: 12,
  alignItems: 'center',
},

modalButtonPrimaryText: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',
},

peligrosidadContainer: {
  flexDirection: 'row',
  marginLeft: 8,
},

triangulo: {
  marginHorizontal: 1,
},

modalPeligrosidadIcons: {
  flexDirection: 'row',
},
});

export default styles;