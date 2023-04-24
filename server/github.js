const { Octokit } = require('@octokit/rest');
const fetch = require('node-fetch');
const { oauthAuthorizationUrl } = require('@octokit/oauth-authorization-url');
const _ = require('lodash');

const User = require('./models/User');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const CLIENT_ID = dev ? process.env.GITHUB_TEST_CLIENTID : process.env.GITHUB_LIVE_CLIENTID;
const API_KEY = dev ? process.env.GITHUB_TEST_SECRETKEY : process.env.GITHUB_LIVE_SECRETKEY;

function setupGithub({ server, ROOT_URL }) {
  const verify = async ({ user, accessToken, profile }) => {};

  server.get('/auth/github', (req, res) => {
    // define later
  });

  server.get('/auth/github/callback', async (req, res) => {});
}

exports.setupGithub = setupGithub;
