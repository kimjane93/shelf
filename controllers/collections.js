const Collection = require('../models/collection')
const Resource = require('../models/resource')
const User = require('../models/user')

module.exports = {
  create,
  getMyCollections,
  addNewResource,
}

//Create a new collection
function create(req, res){
  console.log(req.user)
  req.body.createdByName = req.user.name
  // req.body.createdByAvatar = req.user.avatar
  req.body.creator = req.user._id
  console.log(`This is the current form data: ${req.body}`)
  Collection.create(req.body)
  .then((collection) => {
    res.json(collection)
  })
  .catch((err) => {
    res.json(err)
  })
}

function getMyCollections(req, res){
  Collection.find({creator: req.params.id})
  .then((collections) => {
    res.json(collections)
  })
  .catch((err) => {
    res.json(err)
  })
}

function addNewResource(req, res){
  console.log(req.body)
  Collection.findById(req.body.collection)
  .then((collection) => {
    console.log(collection)
    collection.resources.push(req.body.resource)
    collection.save()
    collection.populate('resources')
    console.log(`This is the updated collection: ${collection.resources}`)
    res.json(collection)
  })
  .catch((err) => {
    res.json(err)
  })
}