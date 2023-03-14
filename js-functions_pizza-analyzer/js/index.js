console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
function updateGain() {
  let pizzaSize1 = +pizzaInput1.value;
  let pizzaSize2 = +pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
}
pizzaInput1.addEventListener("input", updateGain);

pizzaInput2.addEventListener("input", updateGain);

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  const area1 = Math.floor(Math.PI) * Math.pow(diameter1 / 2, 2);
  const area2 = Math.floor(Math.PI) * Math.pow(diameter2 / 2, 2);
  let calculatedValue = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(calculatedValue);
}
// calculatePizzaGain();
// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
  if (size1 > size2) {
    outputSection.classList.add("red");
  } else {
    outputSection.classList.remove("red");
  }
}
