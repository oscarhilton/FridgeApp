const mongoose = require('mongoose');
const User = mongoose.model('User');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/user/find/byEmail', (req, res) => {
    const email = req.query.email;
    User.findOne({ email }, (err, user) => {
      if(err) {
        res.send({errorMessage: 'Same user as logged in user!'});
        return err;
      }
      if(user.id == req.user.id){
        res.send({errorMessage: 'Same user as logged in user!'});
      } else if (!user) {
        res.send({errorMessage: 'No user found with that email!'});
      } else {
        res.send(user);
      }
    })
  });
  app.get('/api/user/find/byID', (req, res) => {
    const _id = req.query.id;
    User.findOne({ _id }, (err, user) => {
      if(err) {
        res.send({errorMessage: 'Same user as logged in user!'});
        return err;
      } else {
        res.send(user);
      }
    })
  });
};
