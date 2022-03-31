const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares-> funciones que añaden funcionalidad, se ejecutan siempre, entre la peticion cliente y la respuesta del servidor.
        this.middlewares();
        // Rutas de la aplicacion
        this.routes();
    }

    middlewares() {
        
        //CORS
        this.app.use ( cors() );

        // Lectura y parseo del body, toda información que venga la va a intentar serializada a json
        this.app.use( express.json() );
        
        //Directprio Público
        this.app.use( express.static('public') )



    }

    routes() {
        // el crud al que hagamos referencia, sus endpoints serán referidos a la ruta a la que se le aplica el middleware
        this.app.use( this.usuariosPath, require('../routes/usuarios.routes'))
    }
    
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports = Server;