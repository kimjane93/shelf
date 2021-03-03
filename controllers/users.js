const User = require("../models/user");

module.exports = {
  index,
  addFriend,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function addFriend(req, res){
  console.log(req.body)
  console.log(req.params.id)
  User.findById(req.body.currentUser._id)
  .then((user) => {
    user.friends.push(req.body.user._id)
    user.save()
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}