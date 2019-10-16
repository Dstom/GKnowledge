const { Schema, model } = require('mongoose');

const lessonSchema = new Schema({
    name:{ type: String, required: true, trim: true, unique: true},
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    categorie: {type: String, required: true}
}, {
    timestamps: true
});

module.exports =  model('Lesson', lessonSchema);