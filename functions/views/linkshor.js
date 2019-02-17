var request = require('request');

let path = "CACA"

request({
  method: 'POST',
  url: `https://api.short.cm/links`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JpDoFGMoLWyfBEYp'
  },
  body: `{
      "domain": "go.osismpksmaniwa.web.id",
      "originalURL": "http://yourlongdomain.com/yourlonglink",
      "path": "caca",
      "title": "caca"
    }`

}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});