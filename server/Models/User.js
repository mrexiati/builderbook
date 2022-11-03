const mongoose = require('mongoose');
const _ = require('lodash');
const generateSlug = require('../utils/slugify');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  googleToken: {
    access_token: String,
    refresh_token: String,
    token_type: String,
    expiry_date: Number,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  displayName: String,
  avatarUrl: String,
});

class UserClass {
  static publicFields() {
    return ['id', 'displayName', 'email', 'avatarUrl', 'slug', 'isAdmin'];
  }

  static async signInOrSignUp({ googleId, email, googleToken, displayName, avatarUrl }) {
    const user = await this.findOne({ googleId }).select(UserClass.publicFields().join(' '));

    if (user) {
      const modifier = {};

      if (googleToken.access_token) {
        modifier.access_token = googleToken.access_toke;
      }

      if (googleToken.refresh_token) {
        modifier.refresh_token = googleToken.refresh_token;
      }

      if (_.isEmpty(modifier)) {
        return user;
      }

      await this.updateOne({ googleId }, { $set: modifier });

      return user;
    }
  }
}

const User = mongoose.model('User', mongoSchema);

module.exports = User;
