var mongoose = require('mongoose');

var User = mongoose.model('users_collection', {
  firstname: String,
  lastname: String,
  email: String,
  location: String,
  password: String
});


module.exports.User=User;
