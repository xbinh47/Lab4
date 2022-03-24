'use strict'

$('#message').keyup(function () {
    let message = $('#message')

    let color = $('#color').val();
    let text= $('.text-center');
    text.css('color', color);
    if ($('#bold').prop("checked") == true) {
        text.css('font-weight', 'bold');
    } else {
        text.css('font-weight', '');
    }

    if ($('#italic').prop("checked") == true) {
        text.css('font-style', 'italic');
    } else {
        text.css('font-style', '');
    }

    if ($('#underline').prop("checked") == true) {
        text.css('text-decoration', 'underline');
    } else {
        text.css('text-decoration', '');
    }
    text.text(message.val());
})

$('button').click(function () {
    let text= $('.text-center');
    text.css('color', 'black');
    text.css('font-weight', '');
    text.css('font-style', '');
    text.css('text-decoration', '');
    $('#bold').prop("checked",false);
    $('#italic').prop("checked",false);
    $('#underline').prop("checked",false);
    $("#color option[value=black]").attr('selected', 'selected')
    text.text('This text will be changed immediately when typing new text.')
})



