const {
  Router
} = require('express');
const {
  categoryController
} = require('../controllers/category.controller.js');

const router = Router();

router.get('/category', categoryController.getCategory)
router.post('/category', categoryController.postCategory)
router.delete('/category/:id', categoryController.deleteCategory)

module.exports = router;