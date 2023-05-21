/* eslint-disable no-use-before-define */

const mongoose = require('mongoose');
// const Book = require('./Book');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  isFree: {
    type: Boolean,
    required: true,
    default: false,
  },
  githubFilePath: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
    required: true,
  },
  htmlContent: {
    type: String,
    default: '',
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  seoTitle: String,
  seoDescription: String,
});

class ChapterClass {
  static async getBySlug({ bookSlug, chapterSlug }) {
    const book = await Book.getBySlug({ slug: bookSlug });
    if (!book) {
      throw new Error('Book not found');
    }

    const chapter = await this.findOne({ bookId: book._id, slug: chapterSlug });

    if (!chapter) {
      throw new Error('Chapter not found');
    }

    const chapterObj = chapter.toObject();
    chapterObj.book = book;

    return chapterObj;
  }

  static async syncContent({ book, data }) {
    const {
      title,
      excerpt = '',
      isFree = false,
      sooTitle = '',
      seoDescription = '',
    } = data.attributes;

    const { body, path } = data;

    const chapter = this.findOne({
      bookId: book.id,
      githubFilePath: path,
    });

    let order;

    if (path === 'introduction.md') {
      order = 1;
    } else {
      order = parseInt(path.match(/[0-9]+/), 10) + 1;
    }

    const content = body;
    const htmlContent = markdownToHtml(content);
    const htmlExcerpt = markdownToHtml(excerpt);
    const sections = getSections(content);

    
  }
}

mongoSchema.index({ bookId: 1, slug: 1 }, { unique: true });
mongoSchema.index({ bookId: 1, githubFilePath: 1 }, { unique: true });

mongoSchema.loadClass(ChapterClass);

const Chapter = mongoose.model('Chapter', mongoSchema);

module.exports = Chapter;

const Book = require('./Book');
