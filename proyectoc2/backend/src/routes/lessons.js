const { Router } = require('express');
const router = Router();

const {getLessons, createMyLesson, getLesson, deleteLesson, updateLesson, getMyLessons} = require('../controllers/lessons.controller');

const auth = require('../middlewares/auth');


router.route('/')
    .get(getLessons)
    .post(auth, createMyLesson);

router.route('/:id')
    .post(getMyLessons)
    .delete(deleteLesson)
    .put(updateLesson)
    .get(getLesson);
    
module.exports = router;