const flashcardsController = {}

const Deck = require('../models/Deck');
const Flashcard = require('../models/Flashcard');
const User = require('../models/User');
const { UserFlashcard }= require('../models/UserFlashcard');
const { FlashcardCardbox }= require('../models/UserFlashcard');


/**
 * @route POST api/studyflashcards/
 * @param deckId id de deck
 * @param userId id de usuario
 */

flashcardsController.addFlashcardsToStudy = async (req, res) => {

    const { user, deck } = req.body;

    console.log(user,deck);

    // busccar todos los flashcards para agregar al estudio
    const allCards = await Flashcard.find({deck: deck});

    const userFlashcardExists = await UserFlashcard.find({ user: user, deck: deck });    
    console.log(userFlashcardExists);
    if(userFlashcardExists){

        userFlashcardExists
        
        //EXISTE
        allCards.map(card => {
            userFlashcardExists.map(studyCard => {                
                if(card != studyCard){
                    const newFlashcardCardbox = new FlashcardCardbox({ });
                    newFlashcardCardbox.flashcard = card;
                    userFlashcardExists.flashcards.push(newFlashcardCardbox);
                }
            });
        });
        userFlashcardExists.save();
        res.json(userFlashcardExists);             
    }else{
        const newUserFlashcard = new UserFlashcard({});
        //NO EXISTE
        newUserFlashcard.user = user;
        newUserFlashcard.deck = deck;
        allCards.map(card  => {
            const newFlashcardCardbox = new FlashcardCardbox({});
            newFlashcardCardbox.flashcard = card;
            newUserFlashcard.flashcards.push(newFlashcardCardbox)

        });
        newUserFlashcard.save();
        res.json(newUserFlashcard);                
    }    
}
module.exports = flashcardsController;

/**
 * @route POST api/studyflashcards/:id
 * @param deckId id de deck
 * @param userId id de usuario
 */