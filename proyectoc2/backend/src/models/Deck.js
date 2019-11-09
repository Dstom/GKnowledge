const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    name:{ type: String, required: true},
    objective: {type: String},
    // lesson
    lesson:{
        type: Schema.Types.ObjectId, 
        ref:'Lesson'},
    // n to n
    flashcards: [{
        type: Schema.Types.ObjectId,
        ref: 'Flashcard'
    }]}, {
    timestamps: true
});

module.exports =  model('Deck', deckSchema);