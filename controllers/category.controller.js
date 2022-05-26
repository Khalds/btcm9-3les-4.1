const {
  findByIdAndDelete,
  findByIdAndRemove
} = require('../models/Category.model');
const Category = require('../models/Category.model')

module.exports.categoryController = {
  getCategory: (req, res) => {
    Category.find().then((data) => {
      res.json(data)
    })
  },
  postCategory: (req, res) => {
    Category.create({
      catName: req.body.catName
    }).then((data) => {
      res.json(data)
    })
  },
  deleteCategory: (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(() => {
      res.json(`Категория удалена`)
    })
  }
}