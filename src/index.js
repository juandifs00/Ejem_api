// Importacion del framework Express
const express = require('express')
// Creando o instanciando la aplicación
const app = express()

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