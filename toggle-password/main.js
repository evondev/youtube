// const input = document.querySelector(".input");
// const eyeOpen = document.querySelector(".eye-open");
// const eyeClose = document.querySelector(".eye-close");
// eyeOpen.addEventListener("click", function () {
//   eyeOpen.classList.add("hidden");
//   eyeClose.classList.remove("hidden");
//   input.setAttribute("type", "password");
// });
// eyeClose.addEventListener("click", function () {
//   eyeOpen.classList.remove("hidden");
//   eyeClose.classList.add("hidden");
//   input.setAttribute("type", "text");
// });
const togglePassword = document.querySelectorAll(".eye");
let activeClassName = "is-active";
togglePassword.forEach((item) => {
  item.addEventListener("click", handleTogglePassword);
});
function handleTogglePassword() {
  let inputType = "password";
  const input = this.parentNode?.previousElementSibling;
  if (this.matches(".eye-close")) {
    inputType = "text";
    const eyeOpen = this.previousElementSibling;
    eyeOpen && eyeOpen.classList.add(activeClassName);
  } else {
    inputType = "password";
    this.classList.remove(activeClassName);
  }
  input && input.setAttribute("type", inputType);
  // previousElementSibling
  // traversing dom
}
