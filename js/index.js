const navItems = document.querySelector(".nav_items");
const openNavBtn = document.getElementById("open_nav_btn");
const closeNavBtn = document.getElementById("close_nav_btn");
const imgCard = document.getElementById("imgCard")

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

imgCard.onmouseover = () => {
  imgCard.style.borderRadius = "0 var(--card-border-radius-5)";
}
