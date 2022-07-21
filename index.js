const AWS = require('aws-sdk');

// const ID = 'YCAJEhvD8dniQA61ctI-BA-6D';
// const SECRET = 'YCP9ZCUC4Pup4PW1EEn94DYIoOUvsbenObDUptcA';
// const BUCKET_NAME = 'emails';
// const REGION = '';

const s3 = new AWS.S3({
  accessKeyId: 'YCAJEhvD8dniQA61ctI-BA-6D',
  secretAccessKey: 'YCP9ZCUC4Pup4PW1EEn94DYIoOUvsbenObDUptcA',
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
  })
}

uploadFile('helloworld');
