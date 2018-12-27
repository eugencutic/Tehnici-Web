$("document").ready(function() {

    $("nav > ul > li").on("mouseover", function() {
        $(this).find("ul").css("visibility", "visible").stop().slideDown();
    })

    $("nav > ul > li").on("mouseout", function() {
        $(this).find("ul").css("visibility", "hidden").stop().slideUp();
    })
})