import { modeloProductos } from "../models/productos.models.js"; //Importa el modelo desde el archivo llamado "productos.models.js"

const productos = [
    { nombre: "Laptop", precio: 10000, descripcion: "Laptop", stock: 9 }, //Productos
    { nombre: "Camara", precio: 500, descripcion: "Camara de video", stock: 5 },
    { nombre: "Cables", precio: 150, descripcion: "Cables de aparatos", stock: 10 },
    { nombre: "Monitor", precio: 2500, descripcion: "Monitor gamer", stock: 30 },
    { nombre: "Celular", precio: 1600, descripcion: "Iphone 16", stock: 40 }
];


modeloProductos.insertMany(productos) //Modelo de productos
    .then(() => console.log("Productos cargados")) // Este comando sirve para mostrarlo en la terminal una vez que cargue los productos.
    .catch((err) => console.error("Error al cargar los productos:", err)); // Este comando sirve para mostrarlo en la terminal y decir si hubo un error al cargar los datos.


export const test = () =>
    console.log("Llamando al controlador de productos"); // Este comando sirve para mostrarlo en la terminal una vez que termine y muestra el comenatrio de que esta llamando al controlador.
