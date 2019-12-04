const { Router } = require('express');
const router = Router();

const { addFlashcardsToStudy,updateStudyFlashcard } = require('../controllers/flashcards.controller');

const auth = require('../middlewares/auth');

router.route('/')
    .post(addFlashcardsToStudy) 
    .put(updateStudyFlashcard)
        
module.exports = router;