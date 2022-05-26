const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  comNews: {
    ref: 'News',
    type: mongoose.SchemaTypes.ObjectId
  },
  comName: String,
  comText: String
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment