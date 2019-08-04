const express = require('express');
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override');// Opcional

const taskRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registration_routes');
const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.set('view engine', 'pug');
app.use(taskRoutes); //indicamos que las rutas las va a tomar desde el archivo de rutas
app.use(registrationRoutes);


// Methodoverride se utiliza para modificar el comportamiento de los methodos que vienen por defecto 
// POST http://localhost:3000/tasks/2?_method=PUT

app.listen(port, ()=> 
console.log(`La palicaion esta corriendo en el puerto ${port} y puedes acceder a través de la url: http://localhost:${port}`));


