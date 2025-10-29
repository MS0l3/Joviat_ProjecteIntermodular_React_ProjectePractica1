import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F7", // Fondo general
    alignItems: "center",
  },

  // 🟥 CABECERA
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#CBD5E1",
    width: "95%",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 40,

  },

   // 🔴 ESTILO POR DEFECTO: BOTÓN ROJO DE RETROCESO
  redButton: {
    backgroundColor: "#B3261E", // rojo
    borderRadius: 10,
    padding: 10,
  },

  // ⚙️ ESTILO ADICIONAL PARA EL MODO AJUSTES
  settingsButton: {
    backgroundColor: "#CBD5E1", // gris claro
  },

  botonMarca: {
    flex: 1,
    alignItems: "center",
  },

  textoMarca: {
    color: "#B3261E",
    fontSize: 20,
    fontWeight: "bold",
  },

  botonUsuario: {
    backgroundColor: "transparent",
    padding: 8,
  },

  // ⚙️ SWITCH MAPA / LLISTA
  switchContainer: {
    flexDirection: "row",
    backgroundColor: "#CBD5E1",
    borderRadius: 20,
    marginVertical: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },

  switchButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },

  switchButtonActivo: {
    backgroundColor: "#B3261E",
    borderRadius: 20,
  
  },

  switchText: {
    color: "#000",
    fontWeight: "600",
  },

  switchTextActivo: {
    color: "#FFF",
  },

  // 📍 CONTENIDO
  mainContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "top",
  },

  // 🔻 TABBAR
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#CBD5E1",
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 6,
    borderRadius: 20,
  },

  tabButtonActivo: {
    backgroundColor: "#FFF8F7",
    borderWidth: 1,
    padding: 2,
    borderColor: "#B3261E",
    marginHorizontal: 10,
  },

  tabText: {
    color: "#000",
    fontSize: 13,
  },

  tabTextActivo: {
    color: "#B3261E",
    fontWeight: "bold",
  },
});
