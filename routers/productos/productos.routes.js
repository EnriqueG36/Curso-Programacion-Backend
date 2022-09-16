//Ruta base api/productos

const express = require('express');         //Importamos el modulo express

const router = express.Router();            //instanciamos nuestro Router
const API = require('../../api/api');       //Importamos la clase API
const api = new API();

//Definiremos las rutas de nuestros recursos----------------------------------------------------------------------
// Envía todo el arreglo de objetos
router.get('/', (req, res) => {
    
    res.status(201).json(api.getAll());
    
});

//Devuelve un objeto según su parametro id, mediante Path params

router.get('/:id', (req, res) => {
    
    console.log (req.params);
    const {id} = req.params;

    res.status(201).json(api.getById(id));

      
});


//Recibe y agrega un producto
router.post('/', (req,res) => {
   console.log (req.body);
    res.status(201).json(api.addNew(req.body));
});

//Actualiza un objeto producto según los params id y body
router.put('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);

    const {id} = req.params;

    res.json(api.updateById(id, req.body));            //La funcion updateById recibe dos parametros, el Id y el Body


});

//Elimina un producto según su id
router.delete('/:id', (req, res) => {

    console.log(req.params);
    const {id} = req.params;

    res.status(201).json(api.deleteById(id))

});

//--------------------------------------------------------------------------------------------------------------
module.exports = router;                    //Exportamos nuestro Router