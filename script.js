
$(window).on("load",function(){
    $(".load img").fadeOut(2000);
    $("#load").fadeOut(2000);
  });

AOS.init();



$("#bar").click(function(){
    $("#nav-sm").fadeToggle(1000);
});
$("#cross").click(function(){
    $("#nav-sm").fadeToggle(1000);
});
$(".navlinks").click(function(){
    $("#nav-sm").fadeToggle(1000);
});