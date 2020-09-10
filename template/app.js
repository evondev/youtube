const colors = [
  "black",
  "green",
  "red",
  "pink",
  "#ffa400",
  "#ff7860",
  "#07a787",
  "#e74c3c",
];
const button = document.querySelector(".button");

button.addEventListener("click", function () {
  const itemColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = itemColor;
});
