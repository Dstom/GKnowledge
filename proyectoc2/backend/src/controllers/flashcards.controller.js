const flashcardsController = {}

const Deck = require('../models/Deck');
const Flashcard = require('../models/Flashcard');
const User = require('../models/User');
const { userFlashcard } = require('../models/UserFlashcard');
const { flashcardCardbox } = require('../models/UserFlashcard');


/**
 * Metodo para crear las flashcards a estudiar
 * 
 * @route POST api/studyflashcards/
 * @param deckId id de deck
 * @param userId id de usuario
 */

flashcardsController.addFlashcardsToStudy = async (req, res) => {

    const { user, deck } = req.body;

    console.log(user, deck);

    // busccar todos los flashcards para agregar al estudio
    const allCards = await Flashcard.find({ deck: deck });

    let idFlashcardExists = [];
    let idAllCards = [];

    allCards.map(card => {
        idAllCards.push(card._id);
    });

    let userFlashcardExists = await userFlashcard.findOne({ user: user, deck: deck }).populate('flashcards.flashcard');
    if (userFlashcardExists) {
        //EXISTE
        console.log('exists');
        userFlashcardExists.flashcards.map(studyCard => {
            idFlashcardExists.push(studyCard.flashcard._id);
        });
        //comparamos arrays
        let difference = idAllCards.filter(cardId => !idFlashcardExists.some(existsId => cardId.toString() === existsId.toString()));
        console.log({ idAllCards, idFlashcardExists, difference });
        difference.map(newCardId => {
            let newFlashcardCardbox = new flashcardCardbox({});
            newFlashcardCardbox.flashcard = newCardId;
            newFlashcardCardbox.cardbox = '0';
            userFlashcardExists.flashcards.push(newFlashcardCardbox);
        });
        await userFlashcardExists.save();

        const userFlashcardExistsPopulated = await userFlashcard.findOne({ user: user, deck: deck })
            .populate('flashcards.flashcard')
            .populate('deck', ['name', 'objective']);

        res.json(userFlashcardExistsPopulated);
    } else {
        let newUserFlashcard = new userFlashcard({});
        //NO EXISTE
        newUserFlashcard.user = user;
        newUserFlashcard.deck = deck;
        allCards.map(card => {
            let newFlashcardCardbox = new flashcardCardbox({});
            newFlashcardCardbox.flashcard = card;
            newFlashcardCardbox.cardbox = '0';
            newUserFlashcard.flashcards.push(newFlashcardCardbox);

        });
        await newUserFlashcard.save();

        const findNewUserFLashcard = await userFlashcard.findOne({ user: user, deck: deck })
            .populate('flashcards.flashcard')
            .populate('deck', ['name', 'objective'])
        res.json(findNewUserFLashcard);
    }
}

module.exports = flashcardsController;


/**
 * @route PUT api/studyflashcards/
 * @param deckId id de deck
 * @param userId id de usuario
 * @param flashcardId id de flashcard, actualizar cardbox
 */

flashcardsController.updateStudyFlashcard = async (req, res) => {
    const { user, deck, flashcardId } = req.body;

   /* let userFlashcards = await userFlashcard.findOne({ user: user, deck: deck }).populate('flashcards.flashcard');

    userFlashcard.findOneAndUpdate(
        { user: user, deck, deck, 'flashcards.flashcard': flashcardId },
        {
            '$set': {
                'flashcard.$.cardbox': 'updated item2',
                'items.$.value': 'two updated'
            }
        }
    );*/

    const test = userFlashcard.update({ user: user, deck: deck, 'flashcards.flashcard': flashcardId },
    {"$set": {"flashcards.flashcard.$.cardbox": "3"}});
    console.log("test",  test);
    res.json(test);
}