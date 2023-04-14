adviceId = document.querySelector("#adviceId");
adviceText = document.querySelector(".advice__text");
adviceButton = document.querySelector(".advice__button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      adviceId.innerHTML = responseJSON.slip.id;
      adviceText.innerHTML = responseJSON.slip.advice;
    });
}

adviceButton.addEventListener("click", () => {
  getAdvice();
});
