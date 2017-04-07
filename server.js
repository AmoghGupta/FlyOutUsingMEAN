var express = require('express');
var app= express();
var fs= require("fs");
var bodyParser =  require('body-parser');
var mongoose  = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/BlogApp");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//edit post code
app.get("/api/jsondata/",function(req,res){
  var flyOutData=  JSON.parse(fs.readFileSync('./public/data.json','utf8'));
  res.send(flyOutData);
}
);

app.listen(3000);
