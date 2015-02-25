/**
* models/user.js
*/
var mongoose = require('mongoose');
var config   = require('../config/settings');

var User = mongoose.model('User', new mongoose.Schema({
  instagramId: { type: String, index: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  username: String,
  fullName: String,
  picture: String,
  accessToken: String
}));

mongoose.connect( config.db );

module.exports.user = User;