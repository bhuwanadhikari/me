const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gphotoSchema = new Schema({
  // 's' of string is small in .ts file and capital in .js file : REMEMBER
  url: String,
  caption: String,
  views: Number,
  comments: [{commenter: String, body:String, date: Date}],
  likes: Number,
  dislikes: Number
});

module.exports = mongoose.model('gphoto', gphotoSchema, 'gphotos');  // blog is the name of model and blogs is the name of database in mLab
