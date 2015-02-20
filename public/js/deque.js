$(document).ready(function(){
    $('.delete-important-data').click(function() {
        //$(this).text('Sure?').removeClass('delete-important-data').addClass('delete-data-conf');
        $(this).hide();
        $(this).next().show();
    });

    $(".delete-data-conf").on("click", function() {
        var id = $(this).parent().attr("id");
        // Do stuff here
        //$.post("/enque/:id", {"id": id})
    });
})