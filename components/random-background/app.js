const buttonRandom = document.querySelector(".button-random");
const colors = [
  "#00aefd",
  "#ffa400",
  "#07a787",
  "#ff7870",
  "black",
  "pink",
  "yellow",
  "#e74c3c",
  "#2979ff",
];
const body = document.body;

buttonRandom.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
});
