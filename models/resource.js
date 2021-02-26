const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  userName: String,
  userAvatar: String,
  content: String
}, {timestamps:true})

const resourceSchema = new Schema({
  title: String,
  description: String,
  url: String,
  type: {type: String, default: 'website'},
  addedByAvatar: String,
  addedByName: String,
  addedBy: {type: Schema.Types.ObjectId, ref:'User'},
  likes: {type:Number, default: 0},
  comments: [commentSchema]
}, {timestamps:true})

resourceSchema.index({
  title: "text",
  description: "text"
})

module.exports = mongoose.model('Resource', resourceSchema)