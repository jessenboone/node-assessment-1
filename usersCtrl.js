const users = require('./userData.json')


module.exports = {

  getAllUsers: function(req, res, next) {
    let arr = [];
    if (req.query.age) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].age < req.query.age) {
          arr.push(users[i])
        }
      }
      if (arr[0]) {
        res.status(200).send(arr)
      } else {
        res.status(500).send("User not found")
      };
    } else if (req.query.lastname) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].last_name == req.query.lastname) {
          arr.push(users[i]);
        }
      } if (arr[0]) {
        res.status(200).send(arr)
      } else {
        res.status(500).send("users not found")
      }
    } else if (req.query.email) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.query.email) {

          arr.push(users[i]);
        }
      } if (arr[0]) {
        res.status(200).send(arr)
      } else {
        res.status(500).send("users not found")
      }
    } else if (req.query.favorites) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].favorites.indexOf(req.query.favorites) != -1) {
          arr.push(users[i]);
        }
      }
      if (arr[0]) {
        res.status(200).send(arr)
      } else {
        res.status(500).send("users not found")
      }
    } else {
      res. status(200).send(users);
    }
  },


  getAllAdmins: function(req, res, next) {
    let arr = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].type == "admin") {
        arr.push(users[i])
      }
    } if (arr[0]){
      res.status(200).send(arr);
    } else {
      res.status(500).send('User not found')
    }
  },

  getNotAdminds: function(req, res, next) {
    let arr = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].type != "admin") {
        arr.push(users[i])
      }
    } if (arr[0]){
      res.status(200).send(arr);
    } else {
      res.status(500).send('User not found')
    }
  },

  getAllUserType: function(req, res, next) {
    let arr = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].type == "user") {
        arr.push(users[i])
      }
    } if (arr[0]){
      res.status(200).send(arr);
    } else {
      res.status(500).send('User not found')
    }
  },

  getModerator: function(req, res, next) {
    let arr = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].type == "moderator") {
        arr.push(users[i])
      }
    } if (arr[0]){
      res.status(200).send(arr);
    } else {
      res.status(500).send('User not found')
    }
  },

  getAdmins: function(req, res, next) {
    let arr = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].type == "admin") {
        arr.push(users[i])
      }
    } if (arr[0]){
      res.status(200).send(arr);
    } else {
      res.status(500).send('User not found')
    }
  },

  getOneUser: function(req, res, next) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
          res.status(200).send(users[i]);
          return;
        }
      }
      res.status(404).json(null)
    },


    updateUser: function(req, res, next) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == req.params.id) {
        users[i] = req.body;
      }
    }
    res.status(200).send(users)
  },


  addUser: function(req, res, next) {
    var id = users[users.length -1].id + 1;
    req.body.id = id;
    users.push(req.body);
    res.status(200).send(users);
  },


  deleteUser: function(req, res) {
    for (let i = 0 ; i < users.length; i++) {
      if (users[i].id == req.params.id) {
        users.splice(i, 1);
      }
    }
    res.status(200).send(users)
  }






}
