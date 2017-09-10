const mongoose = require('mongoose');
const Fridge = mongoose.model('fridge');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.post('/api/item/setReminder', requireLogin, (req, res) => {
    const item = req.body.item;
    const fridge = req.body.fridge;
    const reminder = new Date();
    reminder.setDate(reminder.getDate() + 1);

    Fridge.findOne({_id: fridge},(err, request) => {
      if (!request){
        return res.send({message: 'Something went horribly wrong'});
      } else {
        var updatedItems = [];
        request.items.forEach( (el) => {
          if(el._id == item){
            el.reminder.hasReminder = true;
            el.reminder.reminderTimer = reminder;
            updatedItems.push(el);
          } else {
            updatedItems.push(el);
          }
          request.items = updatedItems;
          request.save();
          console.log(request)
        })
      }
      });
    });

};