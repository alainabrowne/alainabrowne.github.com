/***************************************************
SuperFish Menu
***************************************************/


// initialise plugins
$(function () {
    jQuery('ul.nav').superfish();
});


$(document).ready(function () {

});

$(function ($) {
    $("#main-nav").append("<select/>");
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Please choose page"
    }).appendTo("#main-nav select");
    //new dropdown menu
    $("#main-nav a").each(function () {
        var el = $(this);
        var perfix = '';
        switch (el.parents().length) {
            case (11):
                perfix = '-';
                break;
            case (13):
                perfix = '--';
                break;
            default:
                perfix = '';
                break;

        }
        $("<option />", {
            "value": el.attr("href"),
            "text": perfix + el.text()
        }).appendTo("#main-nav select");
    });

    $('#main-nav select').change(function () {

        window.location.href = this.value;

    });
});
