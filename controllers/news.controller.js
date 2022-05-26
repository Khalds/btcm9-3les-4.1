const {
  findByIdAndDelete,
  findByIdAndRemove
} = require('../models/News.model');
const News = require('../models/News.model')

module.exports.newsController = {
  getNews: (req, res) => {
    News.find().then((data) => {
      res.json(data)
    })
  },
  getNewsId: (req, res) => {
    News.findById(req.params.id).then((data) => {
      res.json(data)
    })
  },
  getNewsByCategory: (req, res) => {
    News.find({
      newsCategory: req.params.id
    }).then((data) => {
      res.json(data)
    })
  },
  postNews: (req, res) => {
    News.create({
      newsCategory: req.body.newsCategory,
      newsTitle: req.body.newsTitle,
      newsText: req.body.newsText
    }).then(() => {
      res.json('Новость добавлена')
    })
  },
  deleteNewsId: (req, res) => {
    News.findByIdAndRemove(req.params.id).then(() => {
      res.json(`Новость удалена`)
    })
  },
  patchNewsId: (req, res) => {
    News.findIdAndUpdate(req.params.id, {
      newsCategory: req.body.newsCategory,
      newsTitle: req.body.newsTitle,
      newsText: req.body.newsText
    }).then(() => {
      res.json(`Новость изменена`)
    })
  }
}