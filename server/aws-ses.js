const aws = require('aws-sdk');

function sendEmail(options) {
  const ses = new aws.SES({
    apiVersion: 'latest',
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secreteAcessKey: process.env.AWS_SECRETACCESSKEY,
  });

  return new Promise((resolve, reject) => {
    ses.sendEmail(
      {
        Source: options.from,
        Destination: {
          ToAddresses: options.to,
        },
        Message: {
          Subject: {
            Data: options.Subject,
          },
          Body: {
            Html: {
              Data: options.Body,
            },
          },
        },
        ReplyToAddresses: options.replyTo,
      },
      (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      },
    );
  });
}

module.exports = sendEmail;
