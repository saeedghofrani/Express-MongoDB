$(document).ready(function () {
    let usernameValid = false;
    let passwordValid = false;
    let firstnameValid = false;
    let lastnameValid = false;
    $('#username').keyup(function (e) {
        e.preventDefault();
        if (!/^[A-Za-z0-9_\.]+$/.test($('#username').val()) || $('#username').val().length < 2) {
            $('#usernameError').text('username shoule be Atleast: 2 character number and letter NO SPACE');
        }
        else {
            usernameValid = true;
            $('#usernameError').text('');
        }
    });
    $('#password').keyup(function (e) {
        e.preventDefault();
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/).test($('#password').val()) || $('#password').val().length < 8) {
            $('#passwordError').text('password shoule be Atleast: 8 character number and letter(uppercase, lowercase) and special character');
        }
        else {
            passwordValid = true;
            $('#passwordError').text('');
        }
    });
    $('#firstname').keyup(function (e) {
        e.preventDefault();
        if ($('#firstname').val().length > 30 || $('#firstname').val().length < 2) {
            $('#firstnameError').text('firstname shoule be Atleast: 2 character and At-most 30character');
        }
        else {
            firstnameValid = true;
            $('#firstnameError').text('');
        }
    });
    $('#lastname').keyup(function (e) {
        e.preventDefault();
        if ($('#lastname').val().length > 30 || $('#lastname').val().length < 2) {
            $('#lastnameError').text('lastname shoule be Atleast: 2 character and At-most 30character');
        }
        else {
            lastnameValid = true;
            $('#lastnameError').text('');
        }
    });
});