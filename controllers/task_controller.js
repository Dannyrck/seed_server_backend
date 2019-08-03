const Task = require('../models').Task;
module.exports = {
    home: (req, res) =>{
        Task.findAll().then( tasks => {
            res.render('tasks/index',{tasks: tasks});
        });
    }
}