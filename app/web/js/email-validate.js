function validate()
{
var email = document.getElementById('email');
var password = document.getElementById('password').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    }
    else if(password.length<7){
    alert('password must be more than 6 characters');
    password.focus;
    return false;
    }
}