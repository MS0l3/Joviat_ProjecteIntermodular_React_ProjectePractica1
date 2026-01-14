import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";

// Función para crear un nuevo usuario en Firestore
export const crearUsuario = async (userId, email) => {
  await setDoc(doc(db, "users", userId), {
    username: "Usuari0001",
    email: email,
    photoURL: "https://example.com/default.png",
    phone: null,
    postsPublicados: [],
    favoritos: [],
    createdAt: serverTimestamp(),
  });
};
/*

import { crearUsuario } from "../services/firestoreService";

const handleCrearUsuarioDemo = async () => {
  await crearUsuario("user_demo_01", "demo@demo.com");
};

--------------------------------------------------------

<TouchableOpacity onPress={handleCrearUsuarioDemo}>
  <Text>Crear usuario demo</Text>
</TouchableOpacity>

*/

// Función para crear un nuevo post en Firestore
export const crearPost = async ({
  tipoCrimen,
  descripcion,
  tags,
  coordenadas,
  imagenes,
  uid,
}) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      tipoCrimen,
      descripcion,
      tags,
      ubicacion: "Ubicación seleccionada en mapa",
      coordenadas,
      imagenes,
      createdAt: serverTimestamp(),
      createdBy: uid ?? "anon",
    });

    return docRef.id;
  } catch (error) {
    console.error("🔥 Error Firestore:", error.code, error.message);
    throw error;
  }
};

/*

import { crearPost } from "../services/firestoreService";

const handleCrearPost = async () => {
  await crearPost({
    tipoCrimen: 1,
    peligrosidad: 3,
    ubicacion: "C/Tumadre 24",
    coordenadas: {
      latitude: 41.3851,
      longitude: 2.1734,
    },
    authorId: "user_demo_01",
  });
};

--------------------------------------------------------

<TouchableOpacity onPress={handleCrearPost}>
  <Text>Publicar</Text>
</TouchableOpacity>


*/

// Función para crear un nuevo comentario en Firestore
export const crearComentario = async (commentData) => {
  await addDoc(collection(db, "comments"), {
    ...commentData,
    createdAt: serverTimestamp(),
  });
};

/*

import { crearComentario } from "../services/firestoreService";

const handleEnviarComentario = async () => {
  await crearComentario({
    postId: "ID_DEL_POST",
    author: "Usuari0001",
    text: "Això és molt perillós!",
  });
};


--------------------------------------------------------

<TouchableOpacity onPress={handleEnviarComentario}>
  <Text>Enviar Comentario</Text>
</TouchableOpacity>

*/

// Función para actualizar datos de un usuario en Firestore
export const actualizarUsuario = async (userId, nuevosDatos) => {
  await updateDoc(doc(db, "users", userId), {
    ...nuevosDatos,
  });
};

/*

await actualizarUsuario("user_demo_01", {
  phone: "+34 123 45 67 89",
});


*/


// Funciones para añadir o quitar un post de los favoritos de un usuario
export const añadirFavorito = async (userId, postId) => {
  await updateDoc(doc(db, "users", userId), {
    favoritos: arrayUnion(postId),
  });
};

export const quitarFavorito = async (userId, postId) => {
  await updateDoc(doc(db, "users", userId), {
    favoritos: arrayRemove(postId),
  });
};

/*

const toggleFavorito = async () => {
  await añadirFavorito("user_demo_01", "ID_DEL_POST");
};

*/

