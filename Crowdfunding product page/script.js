const body = document.body;
const burger = document.querySelector(".burger");
const burgerOverlay = document.querySelector(".burger-overlay");
const burgerNav = document.querySelector(".burger-nav");
const burgerItem = document.querySelectorAll(".burger-item");
const bookmark = document.querySelector(".hero-bookmark");
const bookmarkText = document.querySelector(".hero-bookmark__text");
const backBtns = document.querySelectorAll(".back");
const modalOverlay = document.querySelector(".overlay");
const modalProduct = document.querySelector(".modal__wrapper");
const modalChecks = document.querySelectorAll(".modal__check");
const modalItems = document.querySelectorAll(".modal__item");
const modalClose = document.querySelector(".modal__close");

burger.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger.classList.toggle("burger--active");
  burgerOverlay.classList.toggle("burger-overlay--active");
  burgerNav.classList.toggle("burger-nav--active");
});

burgerItem.forEach((item) => {
  item.addEventListener("click", () => {
    closeBurger();
  });
});

function closeBurger() {
  body.classList.remove("stop-scroll");
  burger.classList.remove("burger--active");
  burgerOverlay.classList.remove("burger-overlay--active");
  burgerNav.classList.remove("burger-nav--active");
}

bookmark.addEventListener("click", () => {
  bookmark.classList.add("hero-bookmark--checked");
  bookmarkText.innerHTML = "Bookmarked!";
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openModal(e.target.dataset["back"]);
    window.scrollTo(0, 200);
  });
});

function openModal(back) {
  modalOverlay.classList.add("overlay--active");
  modalProduct.classList.add("modal__wrapper--active");
  modalItems.forEach((item) => {
    if (item.dataset["back"] === back) {
      item.classList.add("modal__item--active");
    }
  });
}

function closeModal() {
  removeSelectedPledges();
  modalOverlay.classList.remove("overlay--active");
  modalProduct.classList.remove("modal__wrapper--active");
}

modalItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    removeSelectedPledges();
    item.classList.add("modal__item--active");
  });
});

function removeSelectedPledges() {
  modalItems.forEach((item) => {
    item.classList.remove("modal__item--active");
  });
}

modalClose.addEventListener("click", (e) => {
  closeModal();
});
