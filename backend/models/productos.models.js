import { Schema, model } from "mongoose";

const EsquemaProductos = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    stock: Number
});

export const modeloProductos = model("Productos", EsquemaProductos);