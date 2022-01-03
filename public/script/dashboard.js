document.getElementById('done').style['display'] = 'none';
$(document).ready(function () {
    $('#btn_done').click(function (e) {
        e.preventDefault();
        data = {
            username: $('#username').val(), password: $('#password').val(), firstName: $('#firstName').val(), lastName: $('#lastName').val(), gender: $('#gender').val()
        };
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/dashboard/dashboardChange",
            data,
            success: function (response) {
                if (response === 'exist') {
                    return alert('This username already exist');
                }
                $('#userNameCard').text(response.username);
                $('input').attr('disabled', 'disabled');
                $('input').attr('readonly', 'readonly');
                $('#btn_done').removeAttr('disabled');
                $('#btn_done').removeAttr('readonly');
                $('#btn_edit').removeAttr('disabled');
                $('#btn_edit').removeAttr('readonly');
                $('#done').css('display', 'block').fadeOut(5000);
                if (response === 'wrong') {
                    window.location.href = 'http://localhost:4000/logout';
                }
            },
            error: (we) => {
                console.log(we);
            }
        });
    });
    $('#btn_edit').click(function (e) {
        e.preventDefault();
        $('input').removeAttr('disabled');
        $('input').removeAttr('readonly');
    });
});