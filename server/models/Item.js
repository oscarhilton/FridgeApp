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
  contentsMeasureType: String,
  dateAdded: Date,
  belongsTo: String,
  reminder: {
    hasReminder: Boolean,
    reminderTimer: Date
  }

})

mongoose.model('item', itemSchema);
