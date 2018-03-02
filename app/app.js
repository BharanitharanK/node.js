var express=require('express');
var pug=require('pug');
var app=express();
app.set('view engine', 'pug');
app.use(express.static('app'));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index1.html');
});
app.post('/submit',function(req,res){
  res.render('view', {
      id:req.body.id,
      name: req.body.name,
      department:req.body.department,
      salary:req.body.salary
   });
});
app.get('/view',function(req,res){
res.sendFile(__dirname+'/view.html')
});
app.listen('8080');
