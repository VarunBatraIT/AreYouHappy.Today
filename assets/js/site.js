$(function () {

    $.get('/index/stats', function (data) {
        var data = data.data
        $('#jqcloud-sad').jQCloud(data['sad'], {
            height: 200
        });
        $('#jqcloud-happy').jQCloud(data['happy'], {
            height: 200
        });

    });


    $('#answer').hide();
    $("#why").keydown(function (event) {
        if (event.keyCode == 32) {
            event.preventDefault();
        }
    });
    $('.answer').click(function (event) {
        event.preventDefault();
        $('#answer-input').val($(this).attr('data-is'));
        var data = $('#question-form').serialize();
        $.ajax({
            'url': '/index/answer/',
            'data': data,
            'type': 'post',
            'dataType': 'json',
            success: function (data) {
                $('#question').hide('slow');
                $('#answer').show('slow');
            }
        })
    });
});