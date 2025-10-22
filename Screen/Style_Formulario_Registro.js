import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F7",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#B3261E",
    padding: 8,
    borderRadius: 10,
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  logoPlaceholder: {
    width: 200,
    height: 80,
    backgroundColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  formContainer: {
    backgroundColor: "#CBD5E1",
    padding: 20,
    borderRadius: 15,
    width: "85%",
  },
  label: {
    color: "black",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeButton: {
    paddingHorizontal: 10,
  },
  errorText: {
    color: "#B3261E",
    fontSize: 12,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  checkboxLabel: {
    color: "black",
    fontSize: 14,
  },
  linkText: {
    color: "#2563EB",
  },
  registerButton: {
    backgroundColor: "#B3261E",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  registerText: {
    color: "white",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#CBD5E1",
    borderRadius: 15,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    color: "black",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    padding: 10,
  },
  modalButtonText: {
    color: "#B3261E",
    fontWeight: "bold",
  },
  modalScrollContainer: {
  flex: 1,
  maxHeight: 250, 
  marginVertical: 10,
  },
  logoImage: {
  width: 240,
  height: 240,
  alignSelf: "center",
  marginBottom: 0,
  },
  
});
