const { Router } = require('express');
const router = Router();



const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const auth = require('../middlewares/auth');
//User model
const User = require('../models/User');


/**
 * @route GET api/auth/
 * @desc Auth User
 * @access Public
 */
router.post('/', (req, res) => {

    //const items = await Item.find().sort({date: -1});
    const {  email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    User.findOne({ email})
    .then(user => {
        if(!user) return res.status(400).json({msg: 'User does not exists'});

        // validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: 'Invalidad Credentials'});

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
        })   
    })

});

/**
 * @route GET api/auth/user
 * @desc Get User data
 * @access Private
 */
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})
    
module.exports = router;