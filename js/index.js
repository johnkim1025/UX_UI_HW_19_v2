$("#linkedin").click(function(){
    window.open('https://www.linkedin.com/in/john-kim-85190b63/', '_blank');
});
$("#tumblr").click(function(){
    window.open('https://www.tumblr.com/blog/johntaesookim', '_blank');
});

$(".ft-hover").hover(function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
    $(this).siblings("background-color", "none");
});
