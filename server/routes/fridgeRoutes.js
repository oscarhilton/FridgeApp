const mongoose = require('mongoose');
const Fridge = mongoose.model('fridge');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/fridge/new', requireLogin, (req, res) => {
    const users = req.body.users;
    var userArray = [];
    users.forEach( (user) => {
      var userObj = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender
      }
      userArray.push(userObj)
    })
    console.log(userArray)
    const fridge = new Fridge({
      _users: userArray,
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

  app.get('/api/fridge/owner/user/:user_id', requireLogin, (req, res) => {
    const id = req.params.user_id;
    res.send({id});
  })

  app.get('/api/fridge/owner/me', requireLogin, (req, res) => {
    const id = req.user.id;

    Fridge.find({ _users: id }, (err, fridge) => {
      if(err) {
      }
      res.send(fridge);
    });
  })

  app.get('/api/fridge/findById', requireLogin, (req, res) => {
    const _id = req.query.id;

    Fridge.findOne({ _id }, (err, fridge) => {
      if(err) {
        return err;
      } else {
        console.log(fridge);
        res.send(fridge);
      }
    })

  });

};
