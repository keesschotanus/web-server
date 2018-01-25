var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

// Declare middleware up top
app.use(middleware.logger);
app.use(middleware.requireAuthentication);

app.get('/about', (req, res) => {
  res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log('Express server started on port:' + PORT));
