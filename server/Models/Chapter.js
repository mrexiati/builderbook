const mongoose = require('mongoose');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  githubRepo: {
    type: String,
    required: true,
  },
  githubLastCommitSha: String,
  createdAt: {
    type: Date,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

class ChapterClass {}

mongoSchema.loadClass(ChapterClass);

const Chapter = mongoose.model('Chapter', mongoSchema);

module.export = Chapter;
