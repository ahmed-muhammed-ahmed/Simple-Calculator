"use strict";
const numbers = document.querySelectorAll(".number");
const btnOperators = document.querySelectorAll(".operator");
const btnEqual = document.querySelector(".btn-equal");
const btnDelete = document.querySelector(".btn-delete");
const btnClearAll = document.querySelector(".btn-clear");
const previousNumber = document.querySelector(".first-number");
const currentNumber = document.querySelector(".second-number");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function modulus(num1, num2) {
  return num1 % num2;
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function deleteLastDigit() {
  secondNumber = secondNumber.toString().slice(0, -1);
}

function appendNumber(number) {
  if (number === "." && secondNumber.includes(".")) return;
  secondNumber = secondNumber.toString() + number.toString();
}

function chooseOperator(selectedOperator) {
  //checks whether second number is empty or not, if empty return
  if (secondNumber === "") return;
  // checks for the first number exist or nor. if exist call calculateResult()
  if (firstNumber !== "") {
    calculateResult();
  }

  operator = selectedOperator;
  firstNumber = secondNumber;
  secondNumber = "";
}

function calculateResult() {
  const previousNumber = parseFloat(firstNumber);
  const currentNumber = parseFloat(secondNumber);
  if (isNaN(previousNumber) || isNaN(currentNumber)) return;
  let result;
  switch (operator) {
    case "+":
      result = add(previousNumber, currentNumber);
      break;
    case "-":
      result = subtract(previousNumber, currentNumber);
      break;
    case "x":
      result = multiply(previousNumber, currentNumber);
      break;
    case "/":
      result = divide(previousNumber, currentNumber);
      break;
    case "%":
      result = modulus(previousNumber, currentNumber);
      break;
    default:
      return;
  }
  secondNumber = result;
  operator = "";
  firstNumber = "";
}
// Display number on screen
function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay;

  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }

  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

// Update value  accordingly
function updateDisplay() {
  currentNumber.textContent = getDisplayNumber(secondNumber);
  if (operator !== null) {
    previousNumber.textContent = `${getDisplayNumber(firstNumber)} ${operator}`;
  } else {
    previousNumber.textContent = "";
  }
}

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    appendNumber(number.textContent);
    updateDisplay();
  });
});

btnOperators.forEach(function (button) {
  button.addEventListener("click", function () {
    chooseOperator(button.textContent);
    updateDisplay();
  });
});

btnEqual.addEventListener("click", function () {
  calculateResult();
  updateDisplay();
});

btnClearAll.addEventListener("click", function () {
  clearDisplay();
  updateDisplay();
});

btnDelete.addEventListener("click", function () {
  deleteLastDigit();
  updateDisplay();
});
