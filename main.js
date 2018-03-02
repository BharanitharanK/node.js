var http = require('http');
var date=require('./datemodule')
http.createServer(function(req,res){
  return test(req,res);
}
).listen(8080);
function test(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
 res.write(date.date());
  res.write('</form>');
  return res.end();
};
