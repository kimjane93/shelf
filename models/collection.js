const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectionSchema = new Schema({
  creator: [{type: Schema.Types.ObjectId, ref:'User'}],
  createdByName: String,
  createdByAvatar: String,
  title: String,
  description: String,
  resources: [{type: Schema.Types.ObjectId, ref:'Resource'}]
}, {timestamps:true})

module.exports = mongoose.model('Collection', collectionSchema)