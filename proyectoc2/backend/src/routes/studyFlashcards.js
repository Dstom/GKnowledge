const { Router } = require('express');
const router = Router();

const { addFlashcardsToStudy } = require('../controllers/flashcards.controller');

const auth = require('../middlewares/auth');

router.route('/')
    .post(auth, addFlashcardsToStudy)  
        
module.exports = router;