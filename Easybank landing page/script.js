const burger = document.querySelector(".burger");
const body = document.body;
const burgerMenu = document.querySelector(".burger-menu");
const burgerList = document.querySelector(".burger-list");
const burgerItem = document.querySelectorAll(".burger-item");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  body.classList.toggle("stop-scroll");
  burgerMenu.classList.toggle("burger-menu--active");
});

burgerItem.forEach((item) => {
  item.addEventListener("click", () => {
    closeBurger();
  });
});

burgerMenu.addEventListener("click", (e) => {
  const withinList = e.composedPath().includes(burgerList);
  if (!withinList) {
    closeBurger();
  }
});

function closeBurger() {
  burger.classList.remove("burger--active");
  body.classList.remove("stop-scroll");
  burgerMenu.classList.remove("burger-menu--active");
}
