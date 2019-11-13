const  { Schema, model } = require('mongoose');

const flashcardSchema = new Schema({
    question: { type: String, required: true, trim: true },
    answer: {type: String, required: true, trim: true},
    //deck
    deck: {
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }    
});


module.exports =  model('Flashcard', flashcardSchema);