const router = require('express').Router()
const collectionsCtrl = require('../controllers/collections')


//Public Routes


//Protected Routes
router.use(require('../config/auth'))
router.post('/', checkAuth, collectionsCtrl.create)
router.get('/myCollections/:id', checkAuth, collectionsCtrl.getMyCollections)
router.get('/otherCollections/:id', checkAuth, collectionsCtrl.getOtherCollections)
router.put('/addNewResource', checkAuth, collectionsCtrl.addNewResource)
router.put('/deleteResource/:id', checkAuth, collectionsCtrl.deleteResource)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;