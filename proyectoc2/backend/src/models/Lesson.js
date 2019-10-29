const { Schema, model } = require('mongoose');

const lessonSchema = new Schema({
    name:{ type: String, required: true, trim: true, unique: true},
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports =  model('Lesson', lessonSchema);