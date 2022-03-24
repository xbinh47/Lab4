'use strict'
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validate() {
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let error = document.getElementById('error');
    let flag = true;
    if (email.value == '') {
        flag = false;
        email.focus();
    }
    if (lastname.value == '') {
        flag = false;
        lastname.focus();
    }
    if (firstname.value == '') {
        flag = false;
        firstname.focus();
    }
    if (flag == false) {
        error.textContent = 'Some information is blank, Please enter all of your information'
    }
    return flag;
}

function addTable() {
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let error = document.getElementById('error');
    let table = document.getElementById('table-body');
    $('#table tbody').append('<tr><td>' + firstname.value + '</td><td>' + lastname.value +
        '</td><td>' + email.value +
        '</td><td><button class="btn btn-danger btn-sm delete">Delete</button></td></tr>'
    )
}

document.getElementById('submit').addEventListener('click', function (event) {
    if (!validate()) {
        event.preventDefault();
    } else {
        document.getElementById('error').innerHTML='';
        addTable();
    }
});

setInterval(function() {
    $('.delete').click(function () {
        $(this).parents('tr').remove()
    })
}, 1000)