const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
  newsCategory: {
    ref: 'Category',
    type: mongoose.SchemaTypes.ObjectId
  },
  newsTitle: String,
  newsText: String
})

const News = mongoose.model('News', newsSchema)

module.exports = News;