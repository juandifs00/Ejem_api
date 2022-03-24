// Importacion del framework Express
const express = require('express')

// Instaciando un Router
    router = express.Router()

// Importar controladores
const usuario_crt = require("../controllers/usuarios.controller")

// Definción de los endpoints - rutas

const vs = "/api/v1"

router.get(vs + "/usuarios", usuario_crt.consultarUsuarios)
    .get(vs + "/usuarios/:id", usuario_crt.consultarUsuario)
    .post(vs + "/usuarios", usuario_crt.crearUsuario)
    .put(vs + "/usuarios", usuario_crt.modificarUsuario)
    .delete(vs + "/usuarios", usuario_crt.eliminarUsuario)


module.exports=router