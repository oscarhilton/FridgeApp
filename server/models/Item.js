const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  tescoId: Number,
  tpnb: Number,
  name: String,
  quantity: Number,
  price: Number,
  description: String,
  image: String,
  contentsQuantity: Number,
  contentsMeasureType: String
})

mongoose.model('item', itemSchema);
