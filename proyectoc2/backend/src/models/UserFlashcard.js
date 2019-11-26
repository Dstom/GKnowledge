const { Schema, model } = require('mongoose');

let FlashcardCardboxSchema = new Schema({
    flashcard: {
       type: Schema.Types.ObjectId,
       ref: 'Flashcard'
    },
    cardbox: {
       type: String, default: '0'
    }
});

let UserFlashcardSchema = new Schema({
    deck: { type: Schema.Types.ObjectId, required: true, ref: 'Deck'},
    flashcards: [{FlashcardCardboxSchema}],
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User'},
});
//module.exports =  model('UserFlashcard', UserFlashcardSchema);

const UserFlashcard = model('UserFlashcard', UserFlashcardSchema);
const FlashcardCardbox = model('FlashcardCardbox', FlashcardCardboxSchema);

module.exports = { UserFlashcard, FlashcardCardbox }