import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 0,
        paddingHorizontal: 5,
        maxHeight: 790,
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
        marginTop: 20,
        marginBottom: 10,
        flex: 1,
    },

    titol: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 5,
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

    inputContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "95%",
        maxWidth: 480,
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 10,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        maxHeight: 100,
    },

    sendButton: {
        backgroundColor: "#B3261E",
        borderRadius: 20,
        padding: 8,
        marginLeft: 10,
    },
});
