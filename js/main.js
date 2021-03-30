const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");
const images = document.querySelectorAll(".money__img")


const toggleMobileNav = () => {
  burger.classList.toggle("burger--active");
  mobileNav.classList.toggle("mobile-nav--closed");
};

burger.addEventListener("click", toggleMobileNav);

for (const navItem of mobileNavItems) {
  navItem.addEventListener("click", toggleMobileNav);
}

images[0].classList.toggle('money__img--slide-1-to-2');
images[1].classList.toggle('money__img--slide-2-to-3');
images[2].classList.toggle('money__img--slide-3-to-1');
