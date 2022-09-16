

// Intanciación del servidor-------------------------------------------------------------------------
const express = require('express');         //Importamos express
const apiRoutes = require('./routers/routers');

const PORT = process.env.PORT || 8080;      //Definimos el puerto

const app = express();

// Middlewares---------------------------------------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

//Routes --------------------------------------------------------------------------------------------
app.use('/api', apiRoutes);                 //Ruta a routers.js con prefijo /api



//Ejecución del metodo listen------------------------------------------------------------------------

//Log que nos indica que el servidor está corriendo
const connectedServer = app.listen(PORT, () => {
    console.log (`El servidor está listo y corriendo en el puerto ${PORT}`);
})

//En caso de erro, mostrar 
connectedServer.on('error',(error) => {
    console.log(error.message);
})

