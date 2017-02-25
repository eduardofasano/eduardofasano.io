const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sg = require('sendgrid')('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');

const app = express();
const port = process.env.PORT || 3000;
const router = require('./config/routes');
const db = require('./config/db');

let mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/eduardo-portfolio';
mongoose.connect(db.uri);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));
app.use(router);
// app.use(sendgrid);

app.listen(port, () => console.log(`Running on port André ${port} 🎙`));

app.post('/email', function(req, res) {
  //SENDGRID STUFF

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [
            {
              email: 'eduardo.fasano.93@gmail.com',
            },
          ],
          subject: 'Hello World from the SendGrid Node.js Library!',
        },
      ],
      from: {
        email: 'efasano@bu.edu',
      },
      content: [
        {
          type: 'text/plain',
          value: 'Hello, Email!',
        },
      ],
    },
  });

  sg.API(request)
  .then(response => {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  })
  .catch(error => {
    //error is an instance of SendGridError
    //The full response is attached to error.response
    console.log("FAILED")
    console.log(error.response.body);
  });
});
