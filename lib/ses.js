// load AWS sdk
const AWS = require('aws-sdk');

// load AWS config
AWS.config.credentials = {
  accessKeyId: 'AKIAIPZ5FHRYOCL32YAA',
  secretAccessKey: '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'
  // accessKeyId: 'AKIAIPZ5FHRYOCL32YAA',
  // secretAccessKey: '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'
  // accessKeyId: process.env.AWS_ACCESS_KEY,
  // secretAccessKey: process.env.AWS_SECRET_KEY
};

AWS.config.region = 'us-west-2';

// load AWS SES
const ses = new AWS.SES();

function sendMail(req, res){
  // send to list
  const to = ['eduardo.fasano.93@gmail.com'];

  // this must relate to a verified SES account
  const from = 'eduardo.fasano.93@gmail.com';
  console.log(req.body);
  // this sends the email
  // @todo - add HTML version
  ses.sendEmail( {
    Source: from,
    Destination: { ToAddresses: to },
    Message: {
      Subject: {
        Data: `Message from ${req.body.name} - ${req.body.email}`
      },
      Body: {
        Text: {
          Data: req.body.message
        }
      }
    }
  }
  , function(err, data) {
    if(err) throw err;
    console.log('Email sent:');
    console.log(data);
    return res.json(data);
  });
}

module.exports = sendMail;
