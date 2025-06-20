import { modeloProductos } from "../models/productos.models.js";

const productos = [
    { nombre: "Laptop", precio: 10000, descripcion: "Laptop", stock: 9 },
    { nombre: "Camara", precio: 500, descripcion: "Camara de video", stock: 5 },
    { nombre: "Cables", precio: 150, descripcion: "Cables de aparatos", stock: 10 },
    { nombre: "Monitor", precio: 2500, descripcion: "Monitor gamer", stock: 30 },
    { nombre: "Celular", precio: 1600, descripcion: "Iphone 16", stock: 40 }
];


modeloProductos.insertMany(productos)
    .then(() => console.log("Productos cargados"))
    .catch((err) => console.error("Error al cargar los productos:", err));


export const test = () =>
    console.log("Llamando al controlador de productos");
