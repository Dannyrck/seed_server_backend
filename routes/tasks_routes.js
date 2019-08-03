//definimos un listado de rutas que usará nuestro middleware
const express = require('express');
const tasks = require('../controllers/task_controller');

let router = express.Router();

router.route('/').get((req, res)=>{
    res.send('Todo funciona perfecto desde el router 😉');
});

router.route('/tasks').get(tasks.home)
    .post((req, res)=>{
        res.send('Listo para recibir una peticion vía post 👍');
    });

    module.exports = router;