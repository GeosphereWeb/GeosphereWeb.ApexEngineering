$(document).ready(function () {

    // Navigation

    var origHeigth = $("nav").height();
    var myHeights = [];
    var childObj = $(".navigation").children(".navigation-item--hasChildren");
    childObj.find("UL").each(function (key, ele) {
        var myHeight = $(ele).height();
        myHeights.push(myHeight);
        // console.log(myHeight);
    });

    var max = Math.max.apply(Math, myHeights);
    // console.log(max)

    $('.navigation .navigation-item--hasChildren').mouseover(function () {
        // alert("ewernmer");
        $('.GeosphereWeb-header').addClass("show-bg-full");
        $('.GeosphereWeb-header').css("height", $("nav").height() + max);

        // $('.main-nav').css("height", $(this).find("ul").height() + $("nav").height());

        // childObj = $(".navigation").children(".navigation-item--hasChildren");
        // childObj.find("UL").each(function(key, ele){
        //     var myHeight = $(ele).height();
        //     console.log(myHeight);
        // });

    }).mouseout(function () {
        /////
        $('.GeosphereWeb-header').removeClass("show-bg-full");
        $('.GeosphereWeb-header').css("height", origHeigth);

    });
});