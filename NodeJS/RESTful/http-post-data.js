var http = require('http');

const postData = JSON.stringify({
  uri: 'some.uri.com',
  status: 'haha'
});

const options = {
  hostname: "127.0.0.1",
  port: 5000,
  path: '/v1/accounts/config',
  method: "POST",
  headers: {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res)=>{
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

console.log(postData);

// write data to request body
req.write(postData);
req.end();
