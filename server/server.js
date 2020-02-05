const express = require('express');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 3000;
var app = express();
const server = http.createServer(app);
var publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

server.listen(port,() =>{
  console.log(`Listening on port ${port}`);
})
