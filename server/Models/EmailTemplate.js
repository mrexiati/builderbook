const mongoose = require('mongoose');
const { string } = require('prop-types');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  name: {
    type: string,
    required: true,
    unique: true,
  },
  subject: {
    type: string,
    required: true,
  },
  message: {
    type: string,
    required: true,
  },
});

const EmailTemplate = mongoose.model('EmailTemplate', mongoSchema);

async function insertTemplate() {
  const templates = [
    {
      name: 'Welcome',
      subject: 'Welcome to builderbooks',
      message: `<% username %>,
            <p>
                Thanks for signing up for builderbooks
            </p>
            <p>
                In our books we teach you to build an application from scratch
            </p>

            Team
            `,
    },
  ];

  for (const t of templates) { // eslint-disable-line
    const et = await EmailTemplate.findOne({ name: t.name }); // eslint-disable-line
    const message = t.message.replace(/\n/g, '').replace(/[ ]+/g, ' ').trim();

    if (!et) {
      EmailTemplate.createOne({ ...t, message });
    } else if (et.subject !== t.subject || et.message !== t.message) {
      EmailTemplate.updateOne({ _id: et._id }, { $set: { message, subject: t.subject } }).exec();
    }
  }
}

module.exports = EmailTemplate;
