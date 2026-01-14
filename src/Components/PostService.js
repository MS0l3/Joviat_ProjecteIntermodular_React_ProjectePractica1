// src/services/PostService.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

export const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    const geo =
    data.coordenadas ||
    data.Coordenadas ||
    data.Cordenadas ||
    null;

    return {
      // 🔑 ID CORRECTO
      id: doc.id,

      // 🔢 Datos principales
      tipoCrimen: Number(data.tipoCrimen ?? 1),
      peligrosidad: Number(data.peligrosidad ?? data.tipoCrimen ?? 1),

      ubicacion: data.ubicacion ?? "Ubicación desconocida",

      // 📍 GeoPoint BIEN LEÍDO
      coordenadas: geo
        ? {
            latitude: geo.latitude,
            longitude: geo.longitude,
          }
        : null,

      descripcion: data.descripcion ?? "",
      imagenes: data.imagenes ?? [],
      tags: data.tags ?? [],
      comentarios: data.comentarios ?? [],

      createdAt: data.createdAt,
      createdBy: data.createdBy,
    };
  });
};
