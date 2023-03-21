// Select all links in the nav
const navItems = document.querySelector(".nav_items");
// Select the open and close buttons by id
const openNavBtn = document.getElementById("open_nav_btn");
const closeNavBtn = document.getElementById("close_nav_btn");

// openNav function to display the nav items
const openNav = () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};
// closeNav function to hide the nav items
const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};
// Add event listeners to the open and close buttons
openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

// On scroll, change the color of the nav items
$(document).ready(function(){
  $(window).scroll(function(){
    // Get the scroll position, and the height of the page
    let scroll = $(window).scrollTop();
    // get all li elements in the nav
    let navItems = $(".nav_items li");

    // Loop through the nav items
    navItems.each(function(index) {
      // Get the section that the nav item is linked to using the data-section attribute
      let section = $("#" + $(this).find("a").data("section"));
      // get the next section, if there is one
      let nextSection = $("#" + $(this).next().find("a").data("section"));
        // If the section is in view, change the color of the nav item to white
      if (section.length && nextSection.length && section.position().top <= scroll && scroll < nextSection.position().top) {
        $(navItems[index]).find("a").css("color", "white");
      } else {
        // If the section is not in view, change the color of the nav item to back to normal
        $(navItems[index]).find("a").css("color", "");
      }
    });
    // Get the projects section
    let projectsSection = $("#projects");
    // Get the home link
    let homeLink = $(".nav_items li:first-child a");
    // If the projects section is in view, change the color of the home link to white
    if (projectsSection.position().top > scroll) {
      homeLink.css("color", "white");
    } else {
      homeLink.css("color", "");
    }
  });
});

// Options for the observer (which mutations to observe)
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
};

// Create an observer instance linked to the callback function and options
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
  entries.forEach(entry => {
    //Check if the element is intersecting with the viewport on load
    if (!entry.isIntersecting) {
      // If not, return
      return;
      // If it is, add to appear class
    } else {
      entry.target.classList.add("appear");
        // Stop observing the element
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

// select all elements with class "fade-in"
const faders = document.querySelectorAll(".fade-in");

// Loop through each fader element and observe it
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// select all elements with class "slide-in"
const sliders = document.querySelectorAll(".slide-in");

// Loop through each slider element and observe it
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});