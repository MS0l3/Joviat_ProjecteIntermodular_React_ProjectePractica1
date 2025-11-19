import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // 🟦 RECUADRO PARA LA LISTA DE PREFERITS
  recuadroLista: {
    backgroundColor: '#8C8C8C',
    borderRadius: 12,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    padding: 8, // 👈 Añadimos padding interno para separar las celdas del borde
  },

  listaContent: {
    paddingVertical: 4, // 👈 Menos padding vertical ya que las celdas tienen su propio espacio
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },

  emptyStateText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});