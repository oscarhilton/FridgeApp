const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/user/find', (req, res) => {
    console.log('from axios: ', req.query.email);
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
};
