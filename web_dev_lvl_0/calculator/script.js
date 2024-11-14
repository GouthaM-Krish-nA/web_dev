// const display = document.getElementsByClassName("calcu-buttons");

const display = document.querySelector(".calc-display input");
function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    const sanitizedInput = display.value.replace(/÷/g, '/').replace(/×/g, '*');
    display.value = eval(sanitizedInput);
  }
  catch (error) {
    display.value = "Error";
  }
}
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}
function squareNumber() {
  try {
    const currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue, 2);
  } catch (error) {
    display.value = "Error";
  }
}