const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");
let images = document.querySelectorAll(".money__img");

const toggleMobileNav = () => {
  burger.classList.toggle("burger--active");
  mobileNav.classList.toggle("mobile-nav--closed");
};

burger.addEventListener("click", toggleMobileNav);

for (const navItem of mobileNavItems) {
  navItem.addEventListener("click", toggleMobileNav);
}

let iterator = 0;

const slideImages = async () => {
  images[0].classList.add(
    `money__img--slide-${(iterator % 3) + 1}-to-${((iterator + 1) % 3) + 1}`
  );
  images[1].classList.add(
    `money__img--slide-${((iterator + 1) % 3) + 1}-to-${
      ((iterator + 2) % 3) + 1
    }`
  );
  images[2].classList.add(
    `money__img--slide-${((iterator + 2) % 3) + 1}-to-${(iterator % 3) + 1}`
  );

  await setTimeout(() => {
    images[0].classList.remove(
      `money__img--slide-${(iterator % 3) + 1}-to-${((iterator + 1) % 3) + 1}`
    );
    images[1].classList.remove(
      `money__img--slide-${((iterator + 1) % 3) + 1}-to-${
        ((iterator + 2) % 3) + 1
      }`
    );
    images[2].classList.remove(
      `money__img--slide-${((iterator + 2) % 3) + 1}-to-${(iterator % 3) + 1}`
    );

    images[0].classList.remove(`money__img--${(iterator % 3) + 1}`);
    images[1].classList.remove(`money__img--${((iterator + 1) % 3) + 1}`);
    images[2].classList.remove(`money__img--${((iterator + 2) % 3) + 1}`);

    images[0].classList.add(`money__img--${((iterator + 1) % 3) + 1}`);
    images[1].classList.add(`money__img--${((iterator + 2) % 3) + 1}`);
    images[2].classList.add(`money__img--${(iterator % 3) + 1}`);
    iterator++;
  }, 500);
};
setInterval(slideImages, 3000);
