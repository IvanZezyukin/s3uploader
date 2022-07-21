const AWS = require('aws-sdk');

module.exports.handler = async function (event, context) {
  email = event.queryStringParameters.email;

  const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.KEY,
    endpoint: 'storage.yandexcloud.net',
    region: 'ru-central1'
  })

  const uploadFile = (fileName) => {
    const params = {
      Bucket: 'emails',
      Key: fileName,
      Body: ''
    };
    s3.upload(params, (err, data) => {
      if (err) {
        throw err;
      }
      console.log(`File uploaded successfully`);
    });
  };

  uploadFile(email);

  return {
    statusCode: 200,
    body: 'Email saved'
  };

};
