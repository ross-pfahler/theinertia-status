/**
 * @fileoverview Small express server that serves static things.
 * This should do more in the future likely.
 */

var express = require('express');
var app = express();

var PORT = 8000;

app.use(express.static(__dirname));

console.log('starting server at', PORT);
app.listen(PORT);
