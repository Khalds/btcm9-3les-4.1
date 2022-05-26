const {
  Router
} = require('express');
const {
  commentController
} = require('../controllers/comment.controller.js');

const router = Router();

router.get('/comment', commentController.getComments)
router.get('/news/comment/:id', commentController.getCommentByNews)
router.post('/comment', commentController.postComment)
router.delete('/comment/:id', commentController.deleteCommentId)

module.exports = router;