const screen = document.querySelector(".screen");
const numberBtn = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const output = document.querySelector(".output");
const allClear = document.querySelector(".allClear");
const decimalButton = document.querySelector(".deci");

decimalButton.addEventListener("click", disableButton);
allClear.addEventListener("click", clearScreen);
equal.addEventListener("click", saveSecondValue);
clear.addEventListener("click", removeElement);
operator.forEach((op) => op.addEventListener("click", saveFirstValue));
numberBtn.forEach((btn) => btn.addEventListener("click", display));

let firstValue = "";
let operatorSign = "";
let secondValue = "";
let sign = "";
let number = "";

// * Function to disable the . Button
function disableButton() {
  this.disabled = true;
}

// * Function to clear the screen
function clearScreen() {
  output.innerHTML = ""; // clears output screen
  screen.innerText = ""; // clears input screen
  number = ""; // clears all the data saved
}

// * saves the first value
function saveFirstValue() {
  if (!screen.innerText) return; // stops when the user clicks any operator without any initial number

  decimalButton.disabled = decimalButton.disabled == true ? false : false; //* unlocks the < . > button

  // if output is already there then it saves the initial value as the output if not user given number
  firstValue = output.innerText ? output.innerText : screen.innerText;

  operatorSign = this.innerText;
  number = `${firstValue} ${operatorSign} `;
  screen.innerText = number;
}

// **   just like the < saveFirstValue > function it saves the 2nd user input value 
function saveSecondValue() {
  totalWord = screen.innerText; //takes the screen total text

  decimalButton.disabled = decimalButton.disabled == true ? false : false; //same as before unlocks the . button if its locked

  totalWord = totalWord.replace(`${firstValue} ${operatorSign} `, "");  //seperates old user input to 2nd number
  secondValue = totalWord;

  number = "";  //clears the old data
  output.innerText = operate(operatorSign, firstValue, secondValue);  //displays the output after calculation
}

// * Funtion removes the element when back button is pressed
function removeElement() {
  let text = screen.innerText;
  text = text.split("");
  text.splice(text.length - 1, 1);
  screen.innerText = text.join("");
}

// * displays when each button is pressed to the screen
function display(e) {
  number += this.innerText;
  screen.innerText = number;
}

// *** Function for math operation
function add(a, b) {
  return parseFloat((a + b).toFixed(2));
}

function subtract(a, b) {
  return parseFloat((a - b).toFixed(2));
}

function multiply(a, b) {
  return parseFloat((a * b).toFixed(2));
}

function divide(a, b) {
  if (b === 0) {
    return "NO CAN DO BABES";
  }
  return parseFloat((a / b).toFixed(2));
}

// * Function to check the operator clicked and send it to respective funciton for calculation
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
