const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    name:{ type: String, required: true},
    objective: {type: String},
    lessonId: {type: String}    
}, {
    timestamps: true
});

module.exports =  model('Deck', deckSchema);