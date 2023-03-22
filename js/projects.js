//Show Dialog
$(".btn").click(function () {
    $(this).next(".dialog").show().css("display", "flex");
    $(this).css("visibility", "hidden");
});
 $(".close-button").click(function () {
    $(this).closest(".dialog").hide();
     $(".btn").css("visibility", "visible");
 });


//close dialog on click outside
$(document).mouseup(function (e) {
    let container = $(".dialog");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $(".btn").css("visibility", "visible");
    }
});