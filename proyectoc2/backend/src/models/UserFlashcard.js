const { Schema, model } = require('mongoose');

let flashcardCardboxSchema = new Schema({
    flashcard: {
       type: Schema.Types.ObjectId,
       ref: 'Flashcard'
    },
    cardbox: {
       type: String, default: '0'
    }
}, {_id: false});

let userFlashcardSchema = new Schema({
    deck: { type: Schema.Types.ObjectId, required: true, ref: 'Deck'},
    flashcards: [flashcardCardboxSchema],
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User'},
});
//module.exports =  model('UserFlashcard', UserFlashcardSchema);

const userFlashcard = model('userFlashcard', userFlashcardSchema);
const flashcardCardbox = model('flashcardCardbox', flashcardCardboxSchema);

module.exports = { userFlashcard, flashcardCardbox }