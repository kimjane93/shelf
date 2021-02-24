const express = require('express');
const router = express.Router();
const resourceCtrl = require('../controllers/resources');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"))

router.post('/createresource', checkAuth, resourceCtrl.create)


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;