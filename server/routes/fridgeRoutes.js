const mongoose = require('mongoose');
const Fridge = mongoose.model('Fridge');
const Item = mongoose.model('Item');
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
    }).sort('-date');
  })

  app.get('/api/fridge/findById', requireLogin, (req, res) => {
    const _id = req.query.id;
    Fridge.findOne({ _id }, (err, fridge) => {
      if(err) {
        return err;
      } else {
        res.send(fridge);
      }
    })
  });

  app.get('/api/fridge/getItems', requireLogin, (req, res) =>{
    const _id = req.query.id;
    Fridge.findOne({ _id }, (err, fridge) => {
      if(err) {
        return err;
      } else {
        res.send(fridge);
      }
    })
  })

  app.post('/api/fridge/addItem', requireLogin, (req, res) => {
    const item = req.body.item;
    const fridgeToAdd = req.body.fridge;

    const addToFridge = (item, fridge) => {
      Fridge.findOne({ _id: fridge }, (err, fridge) => {
        if(err) {return err;} else {
          fridge.items.push(item);
          fridge.save();
          res.send(fridge.items[fridge.items.length -1]);
        }
      })
    }

    Item.findOne({ belongsTo: fridgeToAdd, name: item.name }, (err, request) => {
      if (!request){
        const newItem = new Item({
          tescoId: item.id,
          tpnb: item.tpnb,
          name: item.name,
          quantity: 1,
          price: item.price,
          description: item.description,
          image: item.image,
          contentsQuantity: item.contentsQuantity,
          contentsMeasureType: item.contentsMeasureType,
          dateAdded: Date.now(),
          belongsTo: fridgeToAdd,
          reminder: {
            hasReminder: false
          }
        })

        newItem.save((err, data) => {
          if(err) {
            return res.send({ errorMessage: 'Could not save'});
          } else {
            addToFridge(data, fridgeToAdd);
          }
        });
      } else {
        request.quantity++;
        request.save();
        return res.send({ successMessage: `Added another ${request.name} to your fridge`});
      }
    });
  });

};
