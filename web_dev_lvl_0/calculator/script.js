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
  if (display.value === "Error") {
    display.value = ""; // Clear the full screen if "Error" is displayed
  } else {
    display.value = display.value.slice(0, -1); // Otherwise, remove the last character
  }
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
display.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const validChars = /^[0-9+\-/%().]*$/; // Only allow digits and valid symbols

  // If the input contains any invalid character, remove it
  if (!validChars.test(inputValue)) {
    event.target.value = inputValue.replace(/[^0-9+\-*/%().]/g, ""); // Remove invalid chars
  }
});
document.addEventListener("keydown", (event) => {
  // List of allowed keys including numbers, basic operators, and parentheses
  const validKeys = /[0-9+\-().%]/;

  // Prevent default action for all valid keys to avoid double input
  if (event.key === "*" || event.key === "/") {
    event.preventDefault();
    appendToDisplay(event.key === "*" ? "×" : "÷"); // Convert * to × and / to ÷
  } else if (validKeys.test(event.key)) {
    event.preventDefault(); // Prevents the double input issue
    appendToDisplay(event.key);
  }
});
