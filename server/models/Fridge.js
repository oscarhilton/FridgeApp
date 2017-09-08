const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = require('./Item');

const fridgeSchema = new Schema({
  items: [itemSchema],
  _users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      firstName: String,
      lastName: String,
      gender: String
    }],
  lastUpdated: Date
})

mongoose.model('fridge', fridgeSchema);
