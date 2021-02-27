const Resource = require('../models/resource')

module.exports = {
    create,
    search,
    addComment,
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
  Resource.findById(req.body.formData.resource._id)
  .then((resource)=>{
    resource.comments.push(req.body.formData)
    resource.save()
    res.json(resource)
  })
  .catch((err) => {
    res.json(err)
  })
}