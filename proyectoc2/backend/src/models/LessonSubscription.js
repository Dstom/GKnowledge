const { Schema, model } = require('mongoose');

const lessonSubscriptionSchema = new Schema({
    lessonId:{ type: String, required: true},
    userId: {type: String, required: true}
}, {
    timestamps: true
});

module.exports =  model('LessonSuscription', lessonSubscriptionSchema);