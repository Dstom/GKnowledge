const { Router } = require('express');
const router = Router();

const { registerUser } =require('../controllers/users.controller');

router.route('/')
 // .get(getUsers)
  .post(registerUser);

/*router.route('/:id')
  .delete(deleteUser)
  .get(getUser)
  .put(updateUser); */

module.exports = router; 