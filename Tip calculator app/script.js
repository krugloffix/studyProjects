const inputBill = document.querySelector("#bill");
const tipOptions = document.querySelectorAll(".tip");
const inputTip = document.querySelector("#customTip");
const inputPersons = document.querySelector("#person");

const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

const resetBtn = document.querySelector(".reset");

let bill = 0;
let tipPersent = 5;
let person = 1;

inputBill.addEventListener("input", (e) => {
  bill = e.target.value;
  checkInputs();
});

tipOptions.forEach((option) =>
  option.addEventListener("click", (e) => {
    clearSelected();
    option.classList.add("selected");
    tipPersent = e.target.dataset["tip"];
    clearInput();
    checkInputs();
  })
);

inputTip.addEventListener("input", (e) => {
  tipPersent = e.target.value;
  clearSelected();
  checkInputs();
});

inputPersons.addEventListener("input", (e) => {
  person = e.target.value;
  checkInputs();
});

function clearSelected() {
  tipOptions.forEach((option) => {
    option.classList.remove("selected");
  });
}

function clearInput() {
  inputTip.value = "";
}

function checkInputs() {
  if (bill != 0 && tipPersent != 0 && person != 0) {
    splitTotal(bill, tipPersent, person);
    resetBtn.removeAttribute("disabled");
  }
}

function splitTotal(bill, tipPersent, person) {
  const tip = (bill * tipPersent) / 100;
  tipAmount.innerHTML = "$" + Math.floor(tip / person);
  totalAmount.innerHTML = "$" + Math.floor((+bill + +tip) / person);
}

resetBtn.addEventListener("click", () => {
  resetBtn.setAttribute("disabled", true);
  resetField();
});

function resetField() {
  inputBill.value = "";
  clearSelected();
  tipOptions[0].classList.add("selected");
  tipPersent = 5;
  inputPersons.value = "";
  inputTip.value = "";
  person = 1;
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
}
