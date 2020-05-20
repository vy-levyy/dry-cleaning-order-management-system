const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  cleaner:{
    id: mongoose.ObjectId,
    name: String,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date
  },
  status:{
    type: String,
  },
  comment:{
    type: String,
  },
  lastChange: {
    howChange: String,
    date: Date,
    whatToChange: String,
  },
});

module.exports = mongoose.model('orders', orderSchema);
