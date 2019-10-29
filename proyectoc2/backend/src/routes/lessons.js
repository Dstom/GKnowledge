const { Router } = require('express');
const router = Router();

const {getLessons, createLesson, getLesson, deleteLesson, updateLesson} = require('../controllers/lessons.controller');

const auth = require('../middlewares/auth');


router.route('/')
    .get(getLessons)
    .post(auth, createLesson);

router.route('/:id')
    .delete(deleteLesson)
    .put(updateLesson)
    .get(getLesson);
    
module.exports = router;