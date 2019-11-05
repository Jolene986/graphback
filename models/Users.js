const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
   username: {
    type: String,
    required : true,
    unique: true
  },  
  password: {
    type: String,
    required : true,
  },
  email: {
    type: String,
    required : true,
    unique: true
  },
  joinDate: {
      type: Date,
      default : Date.now
  },
  favorites: {
      type:[Schema.Types.ObjectId],
      ref: 'Plant'
      
  }
});
module.exports = mongoose.model('User', UsersSchema);
  