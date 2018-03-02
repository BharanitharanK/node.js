var avg=require("../lib/avg").find;
exports["testing"]=function(test)
{
  avg.total=80;
  var ans=avg.average();
  test.equal(ans,20);
  test.done();
}
