console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
var buttonLight = document.querySelector("[data-js='light-mode-button']");
var buttonToggle = document.querySelector("[data-js='toggle-button']");

function dark() {
  console.log(buttonDark);
  bodyElement.classList.add("dark");
}

buttonDark.addEventListener("click", dark);

buttonLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
