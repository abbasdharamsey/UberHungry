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

    $(".delete-listing").click(function() {
        // if ($(this).parent().attr("id")) {
        //     alert("Hey, this is your listing. You can't do that!");
        //     $(".delete-data-conf").hide();
        //     $('.delete-important-data').show();
        // }

        var restaurant = $(this).attr("id");
        var name = $(this).parent().attr("id");
        var json = {
            "restaurant": restaurant,
            "name": name
        }
        console.log(json);

        // Do stuff here
        $.get("/deleteListing", json);
        window.location = "/profile";
        // $.get(/landing/)
    });
})