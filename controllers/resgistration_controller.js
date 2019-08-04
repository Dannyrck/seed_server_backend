const User = require('../models').User;
module.exports = {
    new: (req, res)=>{
        res.render('registration/new');
    },
    /** Crea el alta de un nuevo usuario
    */
    postUsuario:(req,res)=>{
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then((result)=> res.json(result))
        .catch(err=> {
            console.log(err);
            res.json(err);
        });
    }
}