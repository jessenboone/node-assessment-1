const express = require('express');
const bodyParser = require('body-parser');

const app = module.exports = express();
app.use(bodyParser.json());

const UCTRL = require('./usersCtrl')


const port = 3000;


app.get('/api/users', UCTRL.getAllUsers);

app.get('/api/users/:id', UCTRL.getOneUser);

app.get('/api/admins', UCTRL.getAllAdmins);

app.get('/api/nonadmins', UCTRL.getNotAdminds)

app.get('/api/user_type/user', UCTRL.getAllUserType);

app.get('/api/user_type/moderator', UCTRL.getModerator)

app.get('/api/user_type/admin', UCTRL.getAdmins)


app.put('/api/users/:id', UCTRL.updateUser)


app.post('/api/users', UCTRL.addUser)


app.delete('/api/users/:id', UCTRL.deleteUser)




app.listen(port, function() {
  console.log("Ship docked at port", port);
})
