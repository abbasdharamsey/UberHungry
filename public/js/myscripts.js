$(function(){           
    var step = 1;
    var current = 0;
    var maximum = $(".categories ul li").size();
    var visible = 2;
    var speed = 500;
    var liSize = 120;
    var height = 60;    
    var ulSize = liSize * maximum;
    var divSize = liSize * visible; 

    $('.categories').css("width", "auto").css("height", height+"px").css("visibility", "visible").css("overflow", "hidden").css("position", "relative");
    $(".categories ul li").css("list-style","none").css("display","inline");
    $(".categories ul").css("width", ulSize+"px").css("left", -(current * liSize)).css("position", "absolute").css("white-space","nowrap").css("margin","0px").css("padding","5px");

    // $(".categories").swipeleft(function(event){
    //     if(current + step < 0 || current + step > maximum - visible) {return; }
    //     else {
    //         current = current + step;
    //         $('.categories ul').animate({left: -(liSize * current)}, speed, null);
    //     }
    //     return false;
    // });

    // $(".categories").swiperight(function(){
    //     if(current - step < 0 || current - step > maximum - visible) {return; }
    //     else {
    //         current = current - step;
    //         $('.categories ul').animate({left: -(liSize * current)}, speed, null);
    //     }
    //     return false;
    // });         
});

$(document).ready(function() {
    $("#moreModal").modal();

    // var jumboHeight = $('.confirJumbo').outerHeight();
    // function parallax(){
    //     var scrolled = $(window).scrollTop();
    //     $('.confirBackground').css('height', (jumboHeight-scrolled) + 'px');
    // }

    // $(window).scroll(function(e){
    //     parallax();
    // });
  });