const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.get("/myfriends/:id", checkAuth, usersCtrl.getMyFriends)
router.put("/addfriend", checkAuth, usersCtrl.addFriend)
router.put("/deletefriend", checkAuth, usersCtrl.deleteFriend)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;