const Resource = require('../models/resource')

module.exports = {
    create,
    search,
    addComment,
    getRandom,
}

function create(req, res){
    req.body.addedBy = req.user._id
    req.body.addedByName = req.user.name
    req.body.addedByAvatar = req.user.avatar
    Resource.create(req.body)
    .then((resource) => {
        res.json(resource)
    })
    .catch((err)=>{
        res.json(err)
    })
}

function search(req, res){
  Resource.find({
    $text: {
      $search: `${req.body.queryString}`
    }
  })
  .then((resources) => {
    res.json(resources)
  })
  .catch((err) => {
    res.json(err)
  })
}

function addComment(req, res){
  console.log(req.body)
  Resource.findById(req.body.resource)
  .then((resource)=>{
    console.log(resource)
    console.log(req.body)
    resource.comments.push(req.body)
    console.log(resource.comments)
    resource.save()
    console.log(resource)
    res.json(resource)
  })
  .catch((err) => {
    res.json(err)
  })
}

function getRandom(req, res){
  Resource.aggregate([{ $sample: { size : 4 } }])
  .then((resources) => {
    res.json(resources)
  })
  .catch((err) => {
    res.json(err)
  })
}