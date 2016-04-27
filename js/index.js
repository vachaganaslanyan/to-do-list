$(function () {

    $("form").submit(function () {
        var val = $("#input").val();

        if (val.length > 0) {
            $("ol").append("<li>" + val + "<a href='#' id='del'>X</a></li>");
        }
        $(this).trigger('reset');
        return false;
    });
    $(document).on('click', '#del', function(){
        $(this).parent().remove();
    });
    $(document).on('click', 'li', function(){
        $(this).toggleClass("done");
    });
});