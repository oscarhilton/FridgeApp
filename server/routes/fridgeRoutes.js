const mongoose = require('mongoose');
const Fridge = mongoose.model('fridge');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/fridge/new', requireLogin, (req, res) => {
    const users = req.body.users;
    const fridge = new Fridge({
      _users: users,
      lastUpdated: Date.now()
    });
    fridge.save( (err, data) => {
      if(err) {
        return res.send({ errorMessage: 'Could not save'});
      } else {
        return res.send({
          redirect: '/fridge/' + data._id
        });
      }
    });
  });

  app.get('/fridge/:id', requireLogin, (req, res) => {
    res.render('fridge' + req.params.id);
  })

  app.get('/api/fridge/owner/user/:user_id', (req, res) => {
    const id = req.params.user_id;
    res.send({id});
  })

  app.get('/api/fridge/owner/me', (req, res) => {
    const id = req.user.id;

    Fridge.find({ _users: id }, (err, fridge) => {
      if(err) {
      }
      res.send(fridge);
    });
  })
};
