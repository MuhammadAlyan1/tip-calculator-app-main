let fivePercent = document.querySelector("#fivePercent");
let tenPercent = document.querySelector("#tenPercent");
let fifteenPercent = document.querySelector("#fifteenPercent");
let twentyfivePercent = document.querySelector("#twentyfivePercent");
let fiftyPercent = document.querySelector("#fiftyPercent");
let customPercent = document.querySelector("#customPercent");
let reset = document.querySelector("#reset");
let total = document.querySelector("#total");
let price = document.querySelector("#price");
let tip = document.querySelector("#tip");
let userPrice = 0;

let numberOfPeople = document.querySelector("#numberOfPeople");
let userPeople = 0;

let tipPercent = 0;

let tipArray = [
  fivePercent,
  tenPercent,
  fifteenPercent,
  twentyfivePercent,
  fiftyPercent,
];

tipArray.forEach((tipButton) => {
  tipButton.addEventListener("click", (element) => {
    tipPercent = element.target.innerText;
    tipPercent = tipPercent.split("");
    tipPercent.pop();
    tipPercent = tipPercent.join("");
    customPercent.value = "";
    element.target.classList.add("buttonClicked");

    for (let btn of tipArray) {
      if (btn.id == element.target.id) {
        continue;
      }
      btn.classList.remove("buttonClicked");
    }

    if (tipPercent != 0 && userPrice != 0 && userPeople != 0) {
      getResult();
    }
  });
});

customPercent.addEventListener("keyup", (element) => {
  for (let btn of tipArray) {
    btn.classList.remove("buttonClicked");
  }
  tipPercent = Number(element.target.value);
  if (tipPercent != 0 && userPrice != 0 && userPeople != 0) {
    getResult();
  }
});

price.addEventListener("keyup", (element) => {
  userPrice = Number(element.target.value);
  if (tipPercent != 0 && userPrice != 0 && userPeople != 0) {
    getResult();
  }
});

numberOfPeople.addEventListener("keyup", (element) => {
  userPeople = Number(element.target.value);
  console.log(userPeople);
  if (tipPercent != 0 && userPrice != 0 && userPeople != 0) {
    getResult();
  }
});

reset.addEventListener("click", (element) => {
  for (let btn of tipArray) {
    btn.classList.remove("buttonClicked");
  }
  tipPercent = 0;
  customPercent.value = "";
  numberOfPeople.value = "";
  userPeople = 0;

  price.value = "";
  userPrice = 0;
  total.innerText = "$0.00";
  tip.innerText = "$0.00";
});

function getResult() {
  let tipAmount = (tipPercent / 100) * userPrice;
  let tipAmountPerPerson = tipAmount / userPeople;
  let totalPerPerson = (tipAmount + userPrice) / userPeople;

  total.innerText = `$${totalPerPerson.toFixed(2)}`;
  tip.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
}
