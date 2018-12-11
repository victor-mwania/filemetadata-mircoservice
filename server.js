'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest: 'uploads/'})

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

// endpoint for the file upload
app.post('/api/fileanalyse', upload.single('upfile'),  function( req, res) {
  res.json({
    'name': req.file.originalname,
    'type': req.file.mimetype,
    'size': req.file.size,
  })
})
const port = 4400
app.listen(process.env.PORT || port, function () {
  console.log(`Node.js listening ...${port}`);
});
