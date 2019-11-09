const  { Schema, model } = require('mongoose');

const flashCardSchema = new Schema({
    question: { type: String, required: true, trim: true },
    answer: {type: String, required: true, trim: true}    
});


module.exports =  model('FlashCard', flashCardSchema);