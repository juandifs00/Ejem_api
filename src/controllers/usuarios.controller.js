// Importar los servicios
const { leerDocumentos, agregarDocumento } = require("../services/mongodb.services")

// Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

const crearUsuario = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Usuario agregado correctamente"
        // Agrega a la base de datos
        let informacion = req.body
        let resultado = await agregarDocumento("usuarios", informacion)
        console.log(resultado);
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error agregando el usuario"
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const modificarUsuario = (req, res) => {
    res.send("Modificar usuario")
}

/**
* 
* @param {Request} req 
* @param {Response} res 
*/
const consultarUsuarios = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Usuarios consultados correctamente"
        // Consulta a la base de datos de usuarios
        let resultado = await leerDocumentos("usuarios")
        console.log(resultado);
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los usuarios"
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
* 
* @param {Request} req 
* @param {Response} res 
*/
const consultarUsuario = (req, res) => {
    let id = req.params.id
    res.send("Consultar usuarios" + id)
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const eliminarUsuario = (req, res) => {
    res.send("Eliminar usuario")
}

module.exports = {
    crearUsuario,
    modificarUsuario,
    consultarUsuario,
    consultarUsuarios,
    eliminarUsuario
}