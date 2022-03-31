// esto se hace para que en la funcion que declaremos, JS sepa asociar los métodos y campos que tiene una respuesta HTTP
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    // Extraemos los query params -> DESESTRUCTURACIÓN ÚTIL PARA VALORES POR DEFECTO
    const {q, nombre = 'No name', apikey, page = '1', limit = '10'} = req.query;

    res.status(200).json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit

    });
}

const usuariosPost = (req, res = response) => {

    // Extraer body, OJO -> posibles script que se puedan mandar o inyeccines de código
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad

    });
}

const usuariosPut = (req, res = response) => {

    // Recuperamos el parámetro de segmento asignato en el fichero de rutas
    const id = req.params.id

    res.status(200).json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {

    res.status(200).json({
        msg: 'patch API - controlador'

    });
}

const usuariosDelete = (req, res = response) => {

    res.status(200).json({
        msg: 'delete API - controlador'

    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}