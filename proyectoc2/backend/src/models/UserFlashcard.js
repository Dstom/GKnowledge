const { Schema, model } = require('mongoose');


const UserFlashcardSchema = new Schema({
    flashcard:{ type: Schema.Types.ObjectId, required: true},
    user: { type: Schema.Types.ObjectId, required: true},
    cardbox: { type: Schema.Types.ObjectId, required: true}    
});
module.exports =  model('UserFlashcard', UserFlashcardSchema);