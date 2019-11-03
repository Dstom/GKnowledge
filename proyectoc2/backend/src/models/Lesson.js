const { Schema, model } = require('mongoose');

const lessonSchema = new Schema({
    name:{ type: String, required: true, trim: true, unique: true},
    // user who created the lesson
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // users 
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports =  model('Lesson', lessonSchema);