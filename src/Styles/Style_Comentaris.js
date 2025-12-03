import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "flex-start",   // ⬅️ Això força que tot comenci ben amunt
        paddingTop: 0,                 // ⬅️ Aixequem tot encara més
        paddingHorizontal: 5,          // ⬅️ Marges laterals VISIBLES
        maxHeight: 625,
    },

    commentsContainer: {
        width: "95%",
        maxWidth: 480,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 14,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,

        marginTop: 20,      // ⬅️ FA QUE LA CAIXA PUGI VISUALMENT
        marginBottom: 10,
    },

    titol: {
  fontSize: 26,
  fontWeight: "700",
  textAlign: "center",
  marginTop: 20,   // ⬅ molt menys espai
  marginBottom: 5, // ⬅ menys espai
  color: "#000",
},


    emptyState: {
        alignItems: "center",
        paddingVertical: 40,
    },

    emptyStateText: {
        fontSize: 16,
        color: "#777",
        textAlign: "center",
        width: "85%",
    },

    listaContent: {
        paddingBottom: 30,
    },
});
