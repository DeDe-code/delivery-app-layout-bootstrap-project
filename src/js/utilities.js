/** @format */

// FORM BTN DOM MANIPULATION
const btnInterior = document.querySelector("#btn-interior");
const btnAbroad = document.querySelector("#btn-abroad");
const formAbroad = document.querySelector(".form-abroad");
const formInterior = document.querySelector(".form-interior");

btnInterior.addEventListener("click", () => {
  formInterior.classList.add("d-flex");
  formAbroad.classList.add("d-none");
  btnInterior.classList.add("bg-drap");
  btnAbroad.classList.add("bg-black");
  btnAbroad.classList.add("text-custom-white");

  formInterior.classList.remove("d-none");
  formAbroad.classList.remove("d-block");
  btnInterior.classList.remove("bg-black");
  btnInterior.classList.remove("text-custom-white");
  btnAbroad.classList.remove("bg-drap");
});

btnAbroad.addEventListener("click", () => {
  formAbroad.classList.add("d-flex");
  formInterior.classList.add("d-none");
  btnAbroad.classList.add("bg-drap");
  btnInterior.classList.add("bg-black");
  btnInterior.classList.add("text-custom-white");

  formAbroad.classList.remove("d-none");
  formInterior.classList.remove("d-block");
  btnAbroad.classList.remove("bg-black");
  btnInterior.classList.remove("bg-drap");
  btnAbroad.classList.remove("text-custom-white");
});

// SELECT DROPDOWN
const packageInput = [...document.querySelectorAll(".package-detail-select")];
const packageDetailForm = [
  ...document.querySelectorAll(".package-detail-form"),
];
console.log(packageDetailForm);

packageInput.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.value = e.target.value;
    console.log(item.value);

    if (item.value !== "plic") {
      packageDetailForm.forEach((item) => {
        console.log(item);

        item.classList.remove("d-none");
      });
    } else {
      packageDetailForm.forEach((item) => {
        item.classList.add("d-none");
      });
    }
  });
});
