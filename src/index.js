// Importacion del framework Express
const express = require('express')

//Agregar configuaracion al process.env
require("../config/index.config")
// Creando o instanciando la aplicación
const app = express()

// Aplica middleware que permite leer los json del body
app.use(express.json())

// Integrando el Router con la app
const router = require("./router/index.router")
app.use(router)

// Puerto donde se levanta el servidor WEB
// Puerto donde esta escuchando la API
const PORT = 3000

// Levanta la API que estará esuchando en el puerto
// 1. Primer parámetro: Puerto
// 2. Segundo parámetro: Callback - Función
app.listen(PORT, () => {
  console.log(`API esuchando en: http://localhost:${PORT}`)
})