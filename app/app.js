var express=require('express');
var bodyParser = require('body-parser');
var cookie=require('cookie-session');
var app=express();
app.use(express.static('app'));
app.use(express.static('web'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookie({
  name:'session',
  secret:'authentication',
  maxAge:24*60 * 60 * 1000
}))
var user;
var auth=function(req,res,next)
{
if(req.session.user===user&&req.session.admin){
  return next();
}
else
{
  return res.redirect('/login');
}
}
app.get('/',function(req,res){
  res.sendFile(__dirname+'/web/html/welcome.html');
});
app.post('/login',function(req,res){
  req.session.user=req.body.emailid;
  user=req.body.emailid;
  req.session.admin=true;
  res.send(req.body);
});
app.get('/home',auth,function(req,res){
res.sendFile(__dirname+'/web/html/home.html');
});
app.listen('8080');
