$(document).ready(function(){
    $('.delete-important-data').click(function() {
        //$(this).text('Sure?').removeClass('delete-important-data').addClass('delete-data-conf');
        $(this).hide();
        $(this).next().show();
    });

    // $(".delete-data-conf").on("click", function() {
    //     var id = $(this).parent().attr("id");
    //     console.log('piss');
    //     // Do stuff here
    //     $.get("/userCheck/:id", {"id": id})
    //     // $.get(/landing/)
    // });

    $(".delete-data-conf").click(function() {
        var id = $(this).parent().attr("id");
        // Do stuff here
        $.get("/userCheck/"+id, {"id": id}, function(data) {
            if (data == "Fail") {
                alert("You've already signed up for this listing!");
                $(".delete-data-conf").hide();
                $('.delete-important-data').show();
            }
            else {
                window.location = "/enque/"+id;
            }
        });
        // $.get(/landing/)
    });
})