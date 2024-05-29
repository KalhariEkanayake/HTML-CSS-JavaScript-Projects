$(document).ready(function () {
    $("#rightToLeft").on("click", function () {
        $("#slide").animate({
            marginLeft: "0",
        });
        $(".top").animate({
            marginLeft: "100%",
        });
    });
    $("#leftToRight").on("click", function () {
        $("#slide").animate({
            marginLeft: "50%",
        });
        $(".top").animate({
            marginLeft: "0",
        });
    });
});