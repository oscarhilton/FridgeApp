const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = require('./Item');

const fridgeSchema = new Schema({
  items: [itemSchema],
  _users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  lastUpdated: Date
})

mongoose.model('Fridge', fridgeSchema);
