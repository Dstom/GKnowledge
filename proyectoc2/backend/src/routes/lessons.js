const { Router } = require('express');
const router = Router();

const {getLessons, createLesson, getLesson, deleteLesson, updateLesson} = require('../controllers/lessons.controller');

router.route('/')
    .get(getLessons)
    .post(createLesson);

router.route('/:id')
    .delete(deleteLesson)
    .put(updateLesson)
    .get(getLesson);


module.exports = router;