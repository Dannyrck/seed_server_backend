//definimos un listado de rutas que usará nuestro middleware
const express = require('express');
const tasks = require('../controllers/task_controller');

let router = express.Router();

router.route('/').get((req, res)=>{
    res.send('Todo funciona perfecto desde el router 😉');
});

router.route('/tasks').get(tasks.home)
    .post(tasks.create);

router.get('/tasks/new', tasks.new);

module.exports = router;