const body = document.body;
const featuresBtns = document.querySelectorAll(".features-slider__btn");
const featuresItems = document.querySelectorAll(".features-slider__item");
const questions = document.querySelectorAll(".questions__item");
const burger = document.querySelector(".burger");
const burgerOverlay = document.querySelector(".burger-overlay");
const headerLogo = document.querySelector(".header__logo");
const burgerMenu = document.querySelector(".burger-menu");
const burgerList = document.querySelector(".burger-list");
const burgerItem = document.querySelectorAll(".burger-item");
const burgerLogin = document.querySelector(".burger-login");
const headerSocials = document.querySelectorAll(".header-socials__item");

featuresBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveFeature();
    btn.classList.add("features-slider__btn--active");
    let transform = 0;
    switch (e.target.dataset["option"]) {
      case "bookmark":
        transform = 0;
        break;
      case "searching":
        transform = 100;
        break;
      case "sharing":
        transform = 200;
        break;
      default:
        transform = 0;
        break;
    }
    featuresItems.forEach((item) => {
      item.style = `transform: translateX(-${transform}%)`;
    });
  });
});

function removeActiveFeature() {
  featuresBtns.forEach((btn) => {
    btn.classList.remove("features-slider__btn--active");
  });
}

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    if (question.classList.contains("questions-item--active")) {
      removeActiveQuestion();
    } else {
      removeActiveQuestion();
      question.classList.add("questions-item--active");
    }
  });
});

function removeActiveQuestion() {
  questions.forEach((question) => {
    question.classList.remove("questions-item--active");
  });
}

burger.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger.classList.toggle("burger--active");
  headerLogo.classList.toggle("burger-logo");
  burgerMenu.classList.toggle("burger-menu--active");
  if (burgerOverlay.classList.contains("burger-overlay--active")) {
    burgerOverlay.classList.remove("burger-overlay--active");
    burgerOverlay.classList.add("burger-overlay--hidden");
  } else {
    burgerOverlay.classList.add("burger-overlay--active");
    burgerOverlay.classList.remove("burger-overlay--hidden");
  }
});

burgerItem.forEach((item) => {
  item.addEventListener("click", () => {
    closeBurger();
  });
});

burgerLogin.addEventListener("click", () => {
  closeBurger();
});

headerSocials.forEach((item) => {
  item.addEventListener("click", () => {
    closeBurger();
  });
});

function closeBurger() {
  burger.classList.remove("burger--active");
  body.classList.remove("stop-scroll");
  burgerMenu.classList.remove("burger-menu--active");
  headerLogo.classList.remove("burger-logo");
  burgerOverlay.classList.remove("burger-overlay--active");
  burgerOverlay.classList.add("burger-overlay--hidden");
}
