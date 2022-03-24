'use strict'

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

document.getElementById('submit').addEventListener("click", (event) => {
    let email = document.getElementById('email');
    let password = document.getElementById('pwd'); 
    let errorEmail = document.getElementById('errorEmail');
    let errorPassword = document.getElementById('errorPassword');
    let flag=true;
    if(email.value == '')
    {
        errorEmail.textContent='Please enter a email'
        flag = false;
        email.focus();
    }
    if(!isEmail(email.value))
    {
        errorEmail.textContent='Please enter a valid email'
        flag = false;
        email.focus();
    }
    if(password.value == '')
    {
        errorPassword.textContent='Please enter a password'
        flag = false;
        if (email.value != '' && isEmail(email.value)){
            password.focus();
        }
    }
    if(password.value.length < 6)
    {
        errorPassword.textContent='Your password must contain at least 6 characters'
        flag = false;
    }
    if (flag == false){
        event.preventDefault();
    }
})

