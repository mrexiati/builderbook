/* eslint-disable no-use-before-define */

const mongoose = require('mongoose');
const { getCommits, getRepoDetail } = require('../github');
const generateSlug = require('../utils/slugify');
// const Chapter = require('./Chapter');

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
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

class BookClass {
  static async list({ offset = 0, limit = 10 } = {}) {
    const books = await this.find({}).sort({ createdAt: -1 }).skip(offset).limit(limit);
    return { books };
  }

  static async getBySlug({ slug }) {
    const bookDoc = await this.findOne({ slug });
    if (!bookDoc) {
      throw new Error('Book not found');
    }

    const book = bookDoc.toObject();

    book.chapters = (await Chapter.find({ bookId: book._id }, 'title slug').sort({ order: 1 })).map(
      (chapter) => chapter.toObject(),
    );

    return book;
  }

  static async add({ name, price, githubRepo }) {
    const slug = await generateSlug(this, name);
    if (!slug) {
      throw new Error(`Error with slug generation for name: ${name}`);
    }
    return this.create({
      name,
      slug,
      price,
      githubRepo,
      createdAt: new Date(),
    });
  }

  static async edit({ id, name, price, githubRepo }) {
    const book = await this.findById(id, 'slug name');

    if (!book) {
      throw new Error('Book is not found by id');
    }

    const modifier = { price, githubRepo };

    if (name !== book.name) {
      modifier.name = name;
      modifier.slug = await generateSlug(this, name);
    }

    return this.updateOne({ _id: id }, { $set: modifier });
  }

  static async syncContent({ id, user, request }) {
    const book = await this.findById(id, 'githubRepo githubLastCommitSha');

    if (!book) {
      throw new Error('Book is not found by id');
    }

    const repoCommits = await getCommits({ user, repoName: book.githubRepo, request });

    if (!repoCommits || !repoCommits.data || !repoCommits.data[0]) {
      throw new Error('No commits!');
    }

    const lastCommitSha = repoCommits.data[0].sha;
    if (lastCommitSha === book.lastCommitSha) {
      throw new Error('No changes in the commit!');
    }

    const mainFolder = await getRepoDetail({ user, repoName: book.githubRepo, request, path: '' });

    await Promise.all({
      mainFolder.data.map(async (f) => {
        if (f.type !== 'file') {
          return;
        }

        if (f.path !== 'introduction.md' && ) {
          return;
        }

      })
    })

    return book.updateOne({ githubLastCommitSha: lastCommitSha });
  }
}

mongoSchema.loadClass(BookClass);

const Book = mongoose.model('Book', mongoSchema);

module.exports = Book;

const Chapter = require('./Chapter');
