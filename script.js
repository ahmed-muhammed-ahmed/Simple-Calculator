"use strict";
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const btnEqual = document.querySelector(".btn-equal");
const btnDelete = document.querySelector(".btn-delete");
const btnClearAll = document.querySelector(".btn-clear");
let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operator;

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

function operate(operators) {
  if (firstNumber === "") return;
  if (secondNumber !== "") {
    // calculateResult()
  }
  operator = operators;
  firstNumber = secondNumber;
  firstNumber = "";
}
