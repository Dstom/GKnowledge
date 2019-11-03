const userController = {};

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

/**
 * @route GET api/users
 * @desc Reegister new user
 * @access Public
 */
userController.registerUser = async (req, res) => {
    const { name, lastname, email, password} = req.body;

    if(!name || !lastname || !email || !password){
        return res.status(400).json({msg: 'Porfavor ingrese todos los campos'});
    }

    User.findOne({ email })
    .then(user => {
        if(user) return res.status(400).json({msg: 'Este correo está en uso'});

        const newUser = new User({
            name,
            lastname,
            email,
            password
        });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user => {

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user:{
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        } 
                    )
                    
                });
            })
        })
    })
}

/**
 * @route PUT api/users/:id
 * @desc Reegister new user
 * @param user._id -> id del usuario para actualizar datos
 * @param email -> email a actualizar 
 * @param name -> name a actualizar
 * @param lastname -> lastname a actualizar
 * @access Private
 */
userController.updateUser = async (req, res) => {
    const { email, name, lastname } = req.body;
    await User.findOneAndUpdate({_id: req.params.id},{
        email,
        name,
        lastname
    })
}

/**
 * @route GET api/users/:id
 * @route Obtener clases del usuario 
 * @param user._id -> id del usuario para buscar información
 */

userController.getUser = async (req, res) => {
    const userLessons = await User.findById(req.params.id)    
    .select('lessons').populate('lessons', ['name']);    
    res.json(userLessons.lessons);
}

module.exports = userController;