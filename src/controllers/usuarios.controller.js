// Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

const crearUsuario = (req, res) => {
    res.send("Crear usuario")
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
const consultarUsuario = (req, res) => {
    res.send("Consultar usuario")
}

 /**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarUsuarios = (req, res) => {
    res.send("Consultar usuarios")
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