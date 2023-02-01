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
  createdAt: {
    type: Date,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

class BookClass {
  static async list({ offset = 0, limit = 10 } = {}) {
    const book = await this.find({}).sort({ createdAt: -1 }).skip(offset).limit(limit);

    return { book };
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

  static async add({ name, price, githubRepo }) {}

  static async edit({ id, name, price, githubRepo }) {}
}

mongoSchema.loadClass(BookClass);

const Book = mongoose.model('Book', mongoSchema);

module.export = Book;
