const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Fridge = mongoose.model('fridge');

module.exports = app => {
  app.post('/api/fridge/new', requireLogin, (req, res) => {
    const users = req.query.users;

    console.log(users);

    const fridge = new Fridge({
      _users: [req.user.id, ...users],
      lastUpdated: Date.now()
    })

    fridge.save();

    console.log(fridge);

  });

  app.get('/fridge/:id', requireLogin, (req, res) => {
    res.render('fridge' + req.params.id);
  })
};
