/** @format */

// FORM BTN DOM MANIPULATION
const btnInterior = document.querySelector("#btn-interior");
const btnAbroad = document.querySelector("#btn-abroad");
const formAbroad = document.querySelector(".form-abroad");
const formInterior = document.querySelector(".form-interior");

btnInterior.addEventListener("click", () => {
  formInterior.classList.add("d-block");
  formAbroad.classList.add("d-none");
  btnInterior.classList.add("bg-custom-white");
  btnAbroad.classList.add("bg-gray-dark");
  btnAbroad.classList.add("text-custom-white");

  formInterior.classList.remove("d-none");
  formAbroad.classList.remove("d-block");
  btnInterior.classList.remove("bg-gray-dark");
  btnInterior.classList.remove("text-custom-white");
  btnAbroad.classList.remove("bg-custom-white");
});

btnAbroad.addEventListener("click", () => {
  formAbroad.classList.add("d-block");
  formInterior.classList.add("d-none");
  btnAbroad.classList.add("bg-custom-white");
  btnInterior.classList.add("bg-gray-dark");
  btnInterior.classList.add("text-custom-white");

  formAbroad.classList.remove("d-none");
  formInterior.classList.remove("d-block");
  btnAbroad.classList.remove("bg-gray-dark");
  btnInterior.classList.remove("bg-custom-white");
  btnAbroad.classList.remove("text-custom-white");
});

// SELECT DROPDOWN
const packageInput = document.querySelector("#package");
if (packageInput.textContent === "colet" || "palet") {
  console.log("it will be working");
}
