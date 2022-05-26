const {
  findByIdAndDelete,
  findByIdAndRemove
} = require('../models/Comment.model');
const Comment = require('../models/Comment.model')

module.exports.commentController = {
  getComments: (req, res) => {
    Comment.find().then((data) => {
      res.json(data)
    })
  },
  getCommentByNews: (req, res) => {
    Comment.find({
      comNews: req.params.id
    }).then((data) => {
      res.json(data)
    })
  },
  postComment: (req, res) => {
    Comment.create({
      comName: req.body.comName,
      comText: req.body.comText,
      comNews: req.body.comNews
    }).then(() => {
      res.json('Комментарий добавлен')
    })
  },
  deleteCommentId: (req, res) => {
    Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json(`Комментарий удален`)
    })
  }
}