const  { Schema, model } = require('mongoose');

const flashCardSchema = new Schema({
    lessonId: {type: String, required: true},
    question: { type: String, required: true, trim: true },
    answer: {type: String, required: true, trim: true}    
 //   date: {type: Date, defaul: Date.now}
});


module.exports =  model('FlashCard', flashCardSchema);