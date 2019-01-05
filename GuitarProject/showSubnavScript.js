$("document").ready(function() {

    $(".dropdownTrigger").on("mouseover", function() {
        $(this).find(".dropdownContents").css("visibility", "visible").stop().slideDown();
    });

    $(".dropdownTrigger").on("mouseout", function() {
        $(this).find(".dropdownContents").css("visibility", "hidden").stop().slideUp();
    })
})