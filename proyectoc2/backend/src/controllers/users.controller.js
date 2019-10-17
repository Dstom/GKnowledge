const userController = {};

const User = require('../models/User');

/**
 * Get all Users
 */
userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

/**
 * Create User
 */

userController.createUser = async (req, res) => {    
    const { email, password, name, lastname } = req.body;
        const newUser = new User({        
        email,
        password,
        name,
        lastname    
    });   

    await newUser.save();
    res.json({message: "User Created"});
}

/**
 * Get User
 */
userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}
/**
 * Update User
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
 * Delete User
 */
userController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: "User deleted"});

}

module.exports = userController;