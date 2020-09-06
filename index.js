const hamburgerButton = document.querySelector(".hamburgerButton");
const mobileNav = document.querySelector(".mobileNav");

hamburgerButton.addEventListener("click", function () {
  mobileNav.classList.toggle("appear");
});
