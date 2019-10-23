const { Schema, model } = require('mongoose');

//const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    email:{ type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    register_date: { type: Date, default: Date.now}
  //  role: {type: String, required: true},
 //   state: {type:String, required: true, default: 1}   
});

//UserSchema.methods.encryptPassword = async (password) => {
//    const salt = await bcrypt.genSalt(10);
//    const hash = bcrypt.hash(password, salt);
 //   return hash;
//};

// comparar contraseñas en el logeo
//UserSchema.methods.matchPassword = async function(password) {
//    return await bcrypt.compare(password, this.password);
//};

//users collection
module.exports =  model('User', userSchema);