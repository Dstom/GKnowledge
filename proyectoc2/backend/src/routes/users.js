const { Router } = require('express');
const router = Router();

const {createUser, deleteUser, getUsers, updateUser, getUser} =require('../controllers/users.controller');

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .delete(deleteUser)
  .get(getUser)
  .put(updateUser); 

module.exports = router; 