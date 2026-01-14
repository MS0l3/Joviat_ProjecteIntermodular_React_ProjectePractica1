// src/services/PostService.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

export const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      // 🔑 ID CORRECTO
      id: doc.id,

      // 🔢 Datos principales
      tipoCrimen: Number(data.tipoCrimen ?? 1),
      peligrosidad: Number(data.peligrosidad ?? data.tipoCrimen ?? 1),

      ubicacion: data.ubicacion ?? "Ubicación desconocida",

      // 📍 GeoPoint BIEN LEÍDO
      coordenadas: {
        latitude: data.Cordenadas?.latitude,
        longitude: data.Cordenadas?.longitude,
      },

      descripcion: data.descripcion ?? "",
      imagenes: data.imagenes ?? [],
      tags: data.tags ?? [],
      comentarios: data.comentarios ?? [],

      createdAt: data.createdAt,
      createdBy: data.createdBy,
    };
  });
};
