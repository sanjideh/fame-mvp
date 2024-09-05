const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'
});

const s3 = new AWS.S3();

module.exports = { s3 };