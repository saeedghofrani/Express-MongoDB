document.getElementById('done').style['display'] = 'none';
document.getElementById('idHiden').style['display'] = 'none';
document.getElementsByTagName("h5").style['display'] = 'none';
$(document).ready(function () {
    $('#btn_done').click(function (e) {
        e.preventDefault();
        data = {
            username: $('#username').val(), password: $('#password').val(), firstName: $('#firstName').val(), lastName: $('#lastName').val(), gender: $('#gender').val(), id: $('#idHiden').text()
        };
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/dashboard/dashboardChange",
            data,
            success: function (response) {
                if (response === 'validation failed') {
                    return alert('validation faild');
                }
                if (response === 'please try another username') {
                    return alert('please try another username');
                }
                $('#userNameCard').text(response.username);
                $('#username').val(response.username);
                $('#password').val(response.password);
                $('#firstName').val(response.firstName);
                $('#lastName').val(response.lastName);
                $('#gender').val(response.gender);
                $('input').attr('disabled', 'disabled');
                $('input').attr('readonly', 'readonly');
                $('#btn_done').removeAttr('disabled');
                $('#btn_done').removeAttr('readonly');
                $('#btn_edit').removeAttr('disabled');
                $('#btn_edit').removeAttr('readonly');
                $('#done').css('display', 'block').fadeOut(5000);
            },
            error: (we) => {
                console.log(we);
            }
        });
    });
    $('#btn_edit').click(function (e) {
        e.preventDefault();
        $('#password').removeAttr('disabled');
        $('#password').removeAttr('readonly');
        $('#firstName').removeAttr('disabled');
        $('#firstName').removeAttr('readonly');
        $('#lastName').removeAttr('disabled');
        $('#lastName').removeAttr('readonly');
        $('#gender').removeAttr('disabled');
        $('#gender').removeAttr('readonly');
        $('#username').removeAttr('disabled');
        $('#username').removeAttr('readonly');
    });
    $('#deletAcount').click(function (e) {
        e.preventDefault();
        data = {
            id: $('#idHiden').text()
        };
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/dashboard/deleteUser",
            data,
            success: function (response) {
                if (response === 'done') {
                    window.location.href = "http://localhost:3000/login";
                }
                else {
                    return alert('somthin went wrong');
                }
            },
            error: (we) => {
                console.log(we);
            }
        });
    });
});