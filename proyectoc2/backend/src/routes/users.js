const { Router } = require('express');
const router = Router();

const { registerUser, getUser } =require('../controllers/users.controller');
const auth = require('../middlewares/auth');


router.route('/')
 // .get(getUsers)
  .post(registerUser);

router.route('/:id')
//  .delete(deleteUser)
  .get(auth, getUser)
 // .put(updateUser); 

module.exports = router; 