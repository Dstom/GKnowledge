const { Schema, model } = require('mongoose');

const lessonSubscriptionSchema = new Schema({
    lesson:{ 
        type: Schema.Types.ObjectId,
        ref: 'Lesson'},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports =  model('LessonSuscription', lessonSubscriptionSchema);