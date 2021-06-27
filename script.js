const screen = document.querySelector(".screen");
const numberBtn = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const output = document.querySelector(".output");
const allClear = document.querySelector(".allClear");

allClear.addEventListener("click", clearScreen);
equal.addEventListener("click", saveSecondValue);
clear.addEventListener("click", removeElement);
operator.forEach((op) => op.addEventListener("click", saveFirstValue));
numberBtn.forEach((btn) => btn.addEventListener("click", display));

function clearScreen() {
  output.innerHTML = "";
  screen.innerText = "";
  number = "";
}

let firstValue = "";
let operatorSign = "";
let secondValue = "";
function saveFirstValue() {
  if (!screen.innerText) {
    return;
  }

  if (output.innerText) {
    firstValue = output.innerText;
  } else {
    firstValue = screen.innerText;
  }

  operatorSign = this.innerText;
  newNumber = `${firstValue} ${operatorSign} `;
  number = newNumber;
  screen.innerText = newNumber;
}

function saveSecondValue() {
  totalWord = screen.innerText;

  totalWord = totalWord.replace(`${firstValue} ${operatorSign} `, "");
  secondValue = totalWord;

  number = "";
  output.innerText = operate(operatorSign, firstValue, secondValue);
}

let sign = "";
function removeElement() {
  let text = screen.innerText;
  text = text.split("");
  text.splice(text.length - 1, 1);
  screen.innerText = text.join("");
}

let number = "";
function display(e) {
  number += this.innerText;
  screen.innerText = number;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
    if (b === 0){
        return 'ERROR'
    }
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "/":
      return divide(a, b);

    case "X":
      return multiply(a, b);

    default:
      break;
  }
}
