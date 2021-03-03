const User = require("../models/user");

module.exports = {
  index,
  addFriend,
  deleteFriend,
  getMyFriends,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function getMyFriends(req, res){
  User.findById(req.params.id)
  .then((user) => {
    res.json(user.friends)
  })
}

function addFriend(req, res){
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

function deleteFriend(req, res){
  User.findById(req.body.currentUser._id)
  .then((user) => {
    // console.log(user)
    console.log(user.friends)
    console.log(req.body.user._id)
    user.friends = user.friends.filter(f => f._id != req.body.user._id)
    user.save()
    console.log(`Deleted friend: ${user}`)
    res.json(user)
  })
  .catch((err) => {
    res.json(err)
  })
}