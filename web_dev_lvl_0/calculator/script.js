const display = document.querySelector(".calc-display input");
function appendToDisplay(input) {
  if (input === "%") {
    // If the user presses % after a number, convert it immediately
    let currentValue = display.value;
    if (!isNaN(currentValue) && currentValue !== "") {
      display.value = (parseFloat(currentValue) / 100).toString();
    } else {
      display.value += input;
      display.scrollLeft = display.scrollWidth;
    }
  } else {
    display.value += input;
    display.scrollLeft = display.scrollWidth;
  }
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    // Replace the percentage operator with division by 100
    const sanitizedInput = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    // Evaluate the sanitized expression
    display.value = eval(sanitizedInput);
  } catch (error) {
    display.value = "Error"; // In case of an error during evaluation
  }
}
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function squareNumber() {
  try {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      const squared = Math.pow(currentValue, 2);
      display.value = squared; // Directly assign the squared result
    } else {
      display.value = "Error"; // If input is not a valid number
    }
  } catch (error) {
    display.value = "Error";
  }
}
