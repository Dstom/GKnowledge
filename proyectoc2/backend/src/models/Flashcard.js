const  { Schema, model } = require('mongoose');

const flashCardSchema = new Schema({
    deckId: {type: String, required: true},
    question: { type: String, required: true, trim: true },
    answer: {type: String, required: true, trim: true}    
 //   date: {type: Date, defaul: Date.now}
});


module.exports =  model('FlashCard', flashCardSchema);