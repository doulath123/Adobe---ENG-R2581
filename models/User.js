// const mongoose= require('mongoose');
// const UserSchema=new mongoose.Schema({
//     name:{type:String, required:true},
//     email:{type:String, required:true, unique:true},
//     password:{type:String, required:true}
// });
// module.exports=User=mongoose.model('User',UserSchema)


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 50 },
  email: { type: String, required: true, unique: true },
  bio: { type: String, maxLength: 200 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports =User= mongoose.model('User', userSchema);