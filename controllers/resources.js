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
  Resource.findById(req.body.resource)
  .then((resource)=>{
    resource.comments.push(req.body)
    resource.save()
    res.json(resource)
  })
  .catch((err) => {
    res.json(err)
  })
}

function getRandom(req, res){
  Resource.aggregate([{ $sample: { size : 6 } }])
  .then((resources) => {
    res.json(resources)
    console.log(resources)
  })
  .catch((err) => {
    res.json(err)
  })
}