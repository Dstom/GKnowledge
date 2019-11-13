const { Router } = require('express');
const router = Router();

const {addFlashcard, getDeck} = require('../controllers/decks.controller');

const auth = require('../middlewares/auth');

router.route('/:id')
    .get(auth, getDeck)

router.route('/:id/cards')
    .post(auth, addFlashcard)
   

    
module.exports = router;