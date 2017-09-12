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
  _fridge: [{ type: Schema.Types.ObjectId, ref: 'Fridge' }],
  reminder: {
    hasReminder: Boolean,
    reminderTimer: Date
  }

})

mongoose.model('Item', itemSchema);
