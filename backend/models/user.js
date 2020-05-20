const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const saltWork = 10;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  balance:{
    type: Number,
    required: true
  },
  //role if 0 default user for admin 1
  role: {
    type: Number,
    required: true
  },
  wantBeAdmin: {
    type: Boolean
  },
  token: {
    type: String,
  },
  //functional token used for check other operations witch user
  functionalToken: {
    type: String,
  }
});

userSchema.pre('save', function (next) {

  const user = this;
  // generate a salt
  bcrypt.genSalt(saltWork, function (err, salt) {

    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('users', userSchema);
