const {
  Router
} = require('express');
const {
  newsController
} = require('../controllers/news.controller.js');

const router = Router();

router.get('/news', newsController.getNews)
router.get('/news/:id', newsController.getNewsId)
router.get('/news/category/:id', newsController.getNewsByCategory)
router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNewsId)
router.patch('/news/:id', newsController.patchNewsId)

module.exports = router;