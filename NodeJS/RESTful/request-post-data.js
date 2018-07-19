var request = require('request');

request({
  method: 'POST',
  url: 'http://127.0.0.1:5000/v1/accounts/config',
  headers: {
    'content-type': 'application/json'
  },
  json: true,
  body: {
    uri: 'some.example.com222',
    status: 'OK'
  }},
  function (error, response, body) {
    if (error) {
      return console.error(error);
    }
    console.log('OK');
  }
)