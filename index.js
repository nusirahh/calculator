let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendNumber(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function chooseOperator(selectedOperator) {
  firstNumber = Number(display.value);
  operator = selectedOperator;
  display.value = "";
}

function calculate() {
  secondNumber = Number(display.value);
  
  let result;
  
  if (operator === "+") {
    result = firstNumber + secondNumber;
  }
  
  else if (operator === "-") {
    result = firstNumber - secondNumber;
  }
  
  else if (operator === "*") {
    result = firstNumber * secondNumber;
  }
  
  else if (operator === "/") {
    result = firstNumber / secondNumber;
  }
  
  display.value = result;
}

function percentage() {
  display.value = Number(display.value) / 100;
}