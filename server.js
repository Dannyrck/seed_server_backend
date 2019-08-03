const express = require('express');
const bodyParser = require('body-parser'); 

const taskRoutes = require('./routes/tasks_routes');
const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.use(taskRoutes); //indicamos que las rutas las va a tomar desde el archivo de rutas



app.listen(port, ()=> 
console.log(`La palicaion esta corriendo en el puerto ${port} y puedes acceder a través de la url: http://localhost:${port}`));


