"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var PORT = 8000;
app.use(cors());
var rappers = {
  '21 savage': {
    age: 28,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocaion: 'London, England'
  },
  'chance the rapper': {
    age: 27,
    birthName: 'Chancelor Jonathan Bennett',
    birthLocaion: 'Chicago, Illinois'
  },
  unknown: {
    age: 28,
    birthName: 'unknown',
    birthLocaion: 'unknown'
  }
}; // Set up to handle get request

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
}); // Use parameter to send a request a specific name --> :rapperName

app.get('/api/rappers/:rapperName', function (request, response) {
  var rapName = request.params.rapperName.toLowerCase();
  console.log(rapName); // If Rapper exsit

  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    // If no Rappers
    response.json(rappers['unknown']);
  }

  response.json(rappers[rapName]);
}); // Listening on port 8000
// Use process.env.PORT for Heroku

app.listen(process.env.PORT || PORT, function () {
  console.log("Server running on port ".concat(PORT));
});