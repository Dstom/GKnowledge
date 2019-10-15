const { Router} = require('express');
const router = Router();

const {createUser, deleteUser, getUsers} =require('../controllers/users.controller');

router.route('/')
  .get(getUsers)
  .post(createUser);

//router.route('/id')
  //  .put()

router.route('/:id')
  .delete(deleteUser);



    
module.exports = router; 