const Task = require('../models').Task;
module.exports = {
    list: (req, res) =>{
        Task.findAll().then( tasks => {
            res.render('tasks/index',{tasks: tasks});
        });
    },
    create: (req, res)=>{
        Task.create({
            description: req.body.description
        }).then(result => {
            res.json(result);
        }).catch( err=>{
            console.log(err);
        });
    },
    new: (req, res)=>{
        res.render('tasks/new');
    },
    index: (req, res)=>{
        Task.findAll()
            .then(result => res.json(result));
    },
    selectTask: (req, res) =>{
        Task.findAll({where: {
            id: req.params.id
        }})
            .then(result => res.json(result));
    },
    actualizarTask: (req,res)=>{
        Task.update({description: req.body.description}, {
            where: {
                id: req.params.id
            },
        })
            .then( result=> res.redirect('/tasks/'+req.params.id));
    }
}