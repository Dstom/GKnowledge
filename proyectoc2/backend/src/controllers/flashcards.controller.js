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
    // busccar todos los flashcards para agregar al estudio
    const allCards = await Flashcard.find({deck: deck});

    const userFlashcardExists = await UserFlashcard.find({ user: user, deck: deck });
    

    if(!userFlashcardExists){
        const newUserFlashcard = new UserFlashcard({});
        //NO EXISTE
        newUserFlashcard.user = user;
        newUserFlashcard.deck = deck;
        allCards.map(card  => {
            const newFlashcardCardbox = new FlashcardCardbox({});
            newFlashcardCardbox.flashcard = card;
            newUserFlashcard.flashcards.push(newFlashcardCardbox)
        });

        res.json(newUserFlashcard);        

    }else{
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
        res.json(userFlashcardExists);        
    }    
}
module.exports = flashcardsController;

