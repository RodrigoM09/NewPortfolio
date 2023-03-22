//Show Dialog
$(".clickForMoreInfo").click(function () {
    $(this).next(".dialog").show();
});
 $(".close-button").click(function () {
    $(this).closest(".dialog").hide();
 });


//close dialog on click outside
$(document).mouseup(function (e) {
    let container = $(".dialog");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

const projects = document.getElementById('project');
const background = document.getElementsByClassName('.information_container');

projects.addEventListener('mouseover', (e) => {
    background.style.opacity = '1';
});
