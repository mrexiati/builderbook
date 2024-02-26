<a id="readme-top"></a>
## About The Project

![Product Name Screen Shot](https://github.com/mrexiati/builderbook/assets/50190023/04409f67-03ca-4ff1-8470-f0eb1da28b76)
This personal project involves building a full-stack application from scratch, focusing on learning React, MongoDB, and Express. Inspired by https://builderbook.org/, it tracks my learning progress. The app features separate admin and customer interfaces; admins can add books while customers can log in with Google and make purchases via Stripe. I aim to develop this into a boilerplate for future web applications.

<p align="right"><a href="#readme-bottom">Jump to the bottom</a></p>

<br>

### Built With

[![React](https://img.shields.io/badge/React-blue?style=flat-square&logo=react)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org/)  [![Node.js](https://img.shields.io/badge/Node.js-green?style=flat-square&logo=node.js)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express-white?style=flat-square&logo=express)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/MongoDB-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

<br>

### Third-Party APIs Used

[![Google OAuth](https://img.shields.io/badge/Google_OAuth-blue?style=flat-square&logo=google)](https://developers.google.com/identity) [![GitHub API](https://img.shields.io/badge/GitHub_API-black?style=flat-square&logo=github)](https://developer.github.com/v3/) [![Stripe API](https://img.shields.io/badge/Stripe_API-blueviolet?style=flat-square&logo=stripe)](https://stripe.com/docs/api) [![AWS SES](https://img.shields.io/badge/AWS_SES-orange?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/ses/) [![Mailchimp API](https://img.shields.io/badge/Mailchimp_API-yellow?style=flat-square&logo=mailchimp)](https://mailchimp.com/developer/api/)

<br>

### Prerequisites

* .env

```env
# Used in server/server.js
MONGO_URL=
MONGO_URL_TEST=
SESSION_SECRET=

# Used in lib/getRootUrl.js
NEXT_PUBLIC_URL_APP=
NEXT_PUBLIC_PRODUCTION_URL_APP="https://heroku.builderbook.org"

# Used in server/google.js
GOOGLE_CLIENTID=
GOOGLE_CLIENTSECRET=

# Used in server/aws.js
AWS_ACCESSKEYID=
AWS_SECRETACCESSKEY=
AWS_REGION=

# Used in server/models/User.js
EMAIL_ADDRESS_FROM=

# All environmental variables above this line are required for successful sign up

# Used in server/github.js
GITHUB_TEST_CLIENTID=
GITHUB_LIVE_CLIENTID=
GITHUB_TEST_SECRETKEY=
GITHUB_LIVE_SECRETKEY=

# Used in server/stripe.js
NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLEKEY=
NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLEKEY=
STRIPE_TEST_SECRETKEY=
```

<br>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/reshatma/builderbook.git
   ```
2. Install NPM packages
   ```sh
   yarn
   ```
3. Set up your .env
4. Run the applicatio non your local
   ```sh
   yarn start
   ```

<p align="right"><a href="#readme-top">Jump to the top</a></p>

<br>

## Roadmap

I will make this as my own boiler plate app by making changes and adding more features which are WIP. My application will be public and deployed soon, please stay tuned.
<a id="readme-bottom"></a>


