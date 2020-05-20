const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cleanerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
  },
  createdBy: {
    type: String,
    required: true,
  },
  gallery: [String],
  services: [
    {
      name: String,
      price: Number,
    }
  ],
});

module.exports = mongoose.model('cleaners', cleanerSchema);
