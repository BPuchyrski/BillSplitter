const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".calculate");
const result = document.querySelector(".result");
const err = document.querySelector(".error");
const money = document.querySelector(".money");

let calculate = () => {
  let final;
  const selectedOptionValue = Number(tip.value);
  if (selectedOptionValue === 0) {
    final = Number(price.value) / Number(people.value);
    result.style.display = "flex";
    money.textContent = final.toFixed(2) + "$";
  } else {
    tipAmount = Number(price.value) * selectedOptionValue;
    PriceWithTip = tipAmount + Number(price.value);
    final = PriceWithTip / Number(people.value);
    result.style.display = "flex";
    money.textContent = final.toFixed(2) + "$";
  }
};

let allFields = () => {
  if (Number(price.value) === 0 || Number(people.value) === 0) {
    err.style.display = "flex";
    result.style.display = "none";
  } else {
    err.style.display = "none";
    calculate();
  }
};

btn.addEventListener("click", allFields);
