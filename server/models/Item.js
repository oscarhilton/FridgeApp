const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  quantity: Number,
  price: String
})

module.exports = itemSchema;
