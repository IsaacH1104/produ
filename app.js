import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from  './backend/controllers/productos.controllers.js';

dotenv.config();

mongoose.connect(process.env.urlbd)
    .then(() => {
        console.log("Conexión exitosa a la base de datos :')");
    })
    .catch((error) => {
        console.log("Error en la conexión :( ):", error);
    });

const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000");
});

test();
