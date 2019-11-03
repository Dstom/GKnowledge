const { Schema, model } = require('mongoose');

//const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    email:{ type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    register_date: { type: Date, default: Date.now},
    //My lessons
    // users 
    lessons: [{
      type: Schema.Types.ObjectId,
      ref: 'Lesson'
  }]
  //  role: {type: String, required: true},
 //   state: {type:String, required: true, default: 1}   
});
//users collection
module.exports =  model('User', userSchema);