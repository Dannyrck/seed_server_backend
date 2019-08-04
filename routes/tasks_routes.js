//definimos un listado de rutas que usará nuestro middleware
const express = require('express');
const TasksController = require('../controllers/task_controller');

let router = express.Router();

router.route('/').get((req, res)=>{
    res.send('Todo funciona perfecto desde el router 😉');
});

router.route('/tasks').get(TasksController.list)
    .post(TasksController.create);

router.get('/tasks/new', TasksController.new);

router.route('/tasks/:id') //wildcard
    .get(TasksController.selectTask)
    .put(TasksController.actualizarTask);

module.exports = router;