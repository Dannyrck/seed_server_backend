const express = require('express');

const bodyParser = require('body-parser'); 

const tasks = require('./controllers/task_controller');

const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.send('Todo funciona perfecto 😉');
})

app.get('/tasks', tasks.home );

app.listen(port, ()=> 
console.log(`La palicaion esta corriendo en el puerto ${port} y puedes acceder a través de la url: http://localhost:${port}`));


