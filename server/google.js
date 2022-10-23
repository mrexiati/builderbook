const passport = require('passport');
const Strategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/User');

function setupGoogle({ ROOT_URL, server }) {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENTSECRET,
        callbackURL: `${ROOT_URL}/auth/google/callback`,
      },
      verify,
    ),
  );
}

module.exports = setupGoogle;
