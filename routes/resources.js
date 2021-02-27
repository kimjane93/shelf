const express = require('express');
const router = express.Router();
const resourceCtrl = require('../controllers/resources');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"))
router.post('/search', checkAuth, resourceCtrl.search)
router.post('/createresource', checkAuth, resourceCtrl.create)
router.post('/addcomment', checkAuth, resourceCtrl.addComment)
router.get('/random', checkAuth, resourceCtrl.getRandom)


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;