//definimos un listado de rutas que usará nuestro middleware
const express = require('express');
const Tasks = require('../controllers/task_controller');

let router = express.Router();

router.route('/').get((req, res)=>{
    res.send('Todo funciona perfecto desde el router 😉');
});

router.route('/tasks').get(Tasks.list)
    .post(Tasks.create);

router.get('/tasks/new', Tasks.new);

module.exports = router;