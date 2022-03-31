
const {Router} = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios');

router = new Router();

// OJO, no se está ejecutando la funcion, sino que los argumentos que ofrece esa peticion get son pasados a la funcion usuariosGet
router.get('/', usuariosGet);

// Añadimos parámetros de segmento para cuando mandemos el id de cierto usuario.
router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;