const decksController = {}


const Deck = require('../models/Deck');
const Flashcard = require('../models/Flashcard');
/**
 * @route POST api/decks/:id/cards
 * @param deckId id de deck
 * @param question pregunta de la flashcard
 * @param answer respuesta de la flashcard
 */

decksController.addFlashcard = async (req, res) => {
    
    const { question, answer } = req.body;
    const deckId = req.params.id;
    const newFlashcard = new Flashcard({
        question,
        answer,
        deck: deckId
    });
    console.log('mew Flashcard Backend', newFlashcard);
    newFlashcard.save();

    // agregamos flashcard a su respectiva deck
    const cardFinded = await Deck.findById(deckId);
    cardFinded.flashcards.push(newFlashcard._id);
    await cardFinded.save();

    res.json(newFlashcard);
}

/**
 * Obtener deck por id
 * @route GET /api/decks/:id
 * @param id de la deck
 */
decksController.getDeck = async (req, res) => {
    
    const deck = await Deck.findById(req.params.id)
    .populate('flashcards', ['question', 'answer'])
    console.log("my Deck: ", deck);
    res.json(deck);

}

module.exports = decksController;