const { Router } = require('express');
const router = Router();

const {getLessons, createMyLesson, getMyLesson, deleteLesson, updateLesson, getMyLessons
, addDeck} = require('../controllers/lessons.controller');

const auth = require('../middlewares/auth');


router.route('/')
    .get(getLessons)
    .post(auth, createMyLesson);

router.route('/:id')
    .post(getMyLessons)
    .delete(deleteLesson)
    .put(updateLesson)
    .get(getMyLesson);

router.route('/:id/decks')
    .post(addDeck)

    
module.exports = router;