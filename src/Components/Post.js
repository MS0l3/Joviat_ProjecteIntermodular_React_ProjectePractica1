// src/Compoents/Post.js

export default class Post {
  constructor({
    id,
    tipoCrimen,
    peligrosidad,
    ubicacion,
    coordenadas,
    comentarios,
    descripcion,
    imagenes,
    tags,
    createdAt,
    createdBy,
  }) {
    this.id = id;
    this.tipoCrimen = tipoCrimen;
    this.peligrosidad = peligrosidad;
    this.ubicacion = ubicacion;
    this.coordenadas = coordenadas;
    this.comentarios = comentarios;
    this.descripcion = descripcion;
    this.imagenes = imagenes;
    this.tags = tags;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
  }
}