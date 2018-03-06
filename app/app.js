var express=require('express');
var bodyParser = require('body-parser');

var app=express();
app.use(express.static('app'));
app.use(express.static('web'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',function(req,res){
  res.sendFile(__dirname+'/web/html/welcome.html');
});
app.post('/login',function(req,res){
  res.send(req.body);
});
app.get('/home',function(req,res){
res.sendFile(__dirname+'/view.html')
});
app.listen('8080');
