const navItem = document.querySelectorAll(".header__item");
const navItemDropdown = document.querySelectorAll(".header-item__item");
const headerLinks = document.querySelectorAll(".header-link");
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.body;

navItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("header__item--selected")) {
      closeDropdown();
    } else {
      closeDropdown();
      item.classList.add("header__item--selected");
    }
  });
});

navItemDropdown.forEach((item) => {
  item.addEventListener("click", (e) => {
    closeBurger();
  });
});

document.addEventListener("click", (e) => {
  const withinBurger = e.composedPath().includes(burger);
  const withinBurgerMenu = e.composedPath().includes(burgerMenu);
  if (!withinBurger && !withinBurgerMenu) {
    closeDropdown();
    closeBurger();
  }
});

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  burgerMenu.classList.toggle("burger-menu--active");
  body.classList.toggle("stop--scroll");
});

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeDropdown();
    closeBurger();
  });
});

function closeDropdown() {
  navItem.forEach((item) => {
    item.classList.remove("header__item--selected");
  });
  body.classList.remove("stop--scroll");
}

function closeBurger() {
  navItem.forEach((item) => {
    burger.classList.remove("burger--active");
    burgerMenu.classList.remove("burger-menu--active");
  });
  body.classList.remove("stop--scroll");
}
