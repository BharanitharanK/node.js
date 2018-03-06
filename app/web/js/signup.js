function validate()
{
var email = document.getElementById('email');
var password1 = document.getElementById('password1').value;
var password2 = document.getElementById('password2').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    }
    else if(password1.length<7){
    alert('password must be more than 6 characters');
    password1.focus;
    return false;
   }
   else if(password2.length<7){
    alert('password must be more than 6 characters');
    password1.focus;
    return false;
   }
    else if(!(password1===password2)){
    alert('password mismatch');
    password2.focus;
    return false;
    }
}