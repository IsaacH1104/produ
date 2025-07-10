import { Schema, model } from "mongoose"; //Importa las tablas en mongoose

const EsquemaProductos = new Schema({ //Este comando es para hacer la estructura de las tablas.
    nombre: String, //En la variable "nombre" va con tipo "String".
    precio: Number, //En la variable precio va con tipo Number.
    descripcion: String, //En la variable "descripcion" va con tipo "String".
    stock: Number //En la variable stock va con tipo Number.
});

export const modeloProductos = model("Productos", EsquemaProductos); // Exporta la tabla llamda productos.