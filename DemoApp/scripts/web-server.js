var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

//Static serves the pages in the directory with no processing.
app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening on port 8000...');
