const navItems = document.querySelector(".nav_items");
const openNavBtn = document.getElementById("open_nav_btn");
const closeNavBtn = document.getElementById("close_nav_btn");
// const imgCard = document.getElementById("imgCard")

const openNav = () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};
const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

// imgCard.onmouseover = () => {
//   imgCard.style.borderRadius = "0 var(--card-border-radius-5)";
// }

// $(document).ready(function(){
//   $(window).scroll(function(){
//     let scroll = $(window).scrollTop();
//     if (scroll > 0 && scroll < 300) {
//       $(".nav_items li:eq(0)").css("color" , "unset");
//       $(".nav_items li:eq(1)").css("color" , "unset");
//     } else if (scroll > 500 && scroll < 800) {
//       $(".nav_items li:eq(0)").css("color" , "unset");
//       $(".nav_items li:eq(1)").css("color" , "white");
//       $(".nav_items li:eq(2)").css("color" , "unset");
//     } else if (scroll > 1000 && scroll < 1500) {
//       $(".nav_items li:eq(1)").css("color" , "unset");
//       $(".nav_items li:eq(2)").css("color" , "white");
//       $(".nav_items li:eq(3)").css("color" , "unset");
//     } else if (scroll > 1600 && scroll < 1800) {
//         $(".nav_items li:eq(2)").css("color" , "unset");
//         $(".nav_items li:eq(3)").css("color" , "white");
//         $(".nav_items li:eq(4)").css("color" , "unset");
//     } else if (scroll > 2000) {
//         $(".nav_items li:eq(3)").css("color" , "unset");
//         $(".nav_items li:eq(4)").css("color" , "white");
//     }
//     else{
//       $(".nav_items li:eq(0) a").css("color" , "blue");
//     }
//   })
// })
$(document).ready(function(){
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    let navItems = $(".nav_items li");

    navItems.each(function(index) {
      let section = $("#" + $(this).find("a").data("section"));
      let nextSection = $("#" + $(this).next().find("a").data("section"));
      if (section.length && nextSection.length && section.position().top <= scroll && scroll < nextSection.position().top) {
        $(navItems[index]).find("a").css("color", "white");
      } else {
        $(navItems[index]).find("a").css("color", "");
      }
    });
    let projectsSection = $("#projects");
    let homeLink = $(".nav_items li:first-child a");
    if (projectsSection.position().top > scroll) {
      homeLink.css("color", "white");
    } else {
      homeLink.css("color", "");
    }
  });
});
