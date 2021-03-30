const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");

const toggleMobileNav = () => {
  burger.classList.toggle("burger--active");
  mobileNav.classList.toggle("mobile-nav--closed");
};

burger.addEventListener("click", toggleMobileNav);

for (const navItem of mobileNavItems) {
  navItem.addEventListener("click", toggleMobileNav);
}
