const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  // 's' of string is small in .ts file and capital in .js file : REMEMBER
  // also semicolon in ts class and comma in js schema
  title: String,
  imageUrl: String,
  body: String,
  comments: [{commenter: String, body:String, date: Date}],
  likes: Number,
  dislikes: Number
});

module.exports = mongoose.model('blog', blogSchema, 'blogs');  // blog is the name of model and blogs is the name of collection in mLab

