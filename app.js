import mongoose from "mongoose"; //Importa la libreria de mongoose, esta sirve para conectarse a mongo.
import express from "express"; //Importa la libreria de express.
import cors from "cors"; //Importa la libreria de cors.
import dotenv from "dotenv"; //Importa la libreria de dontenv.
import { test } from  './backend/controllers/productos.controllers.js';//Esta importando una funcion llamada test que esta dentro del archivo 

dotenv.config(); //Sirve para traer todo lo de .env

mongoose.connect(process.env.urlbd)
    .then(() => {
        console.log("Conexión exitosa a la base de datos :')");
    }) //Se conecta a mongo y si todo sale bien te mostrara en la terminal "Conexión exitosa a la base de datos".
    .catch((error) => {
        console.log("Error en la conexión :( ):", error);
    }); //En caso de que esta mal saldra "Erro en la conexion"

const app = express(); //Crea el servidor en Note.js
app.use(cors());//Es para el servidor local y que nadie mas entre.

app.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000"); //Esta linea inicia el servidor y muestra en la terminal "Servidor escuchando en el puerto 4000".
});

test(); //Sirve para llamar al controlador desde app.js
