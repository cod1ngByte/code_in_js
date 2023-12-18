"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// const btnOpenModal = document.querySelector(".show-modal");
// console.log(btnOpenModal) // only select first element if mulitple element having same class (.show-modal);

const btnOpenModal = document.querySelectorAll(".show-modal"); // appear in nodelist similar to array but not an array.
/*
console.log(btnOpenModal); //nodelist;
btnOpenModal.forEach(function (item) {
  console.log(item.textContent);
});
*/

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++) {
  // console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener("click", showModal);
  // modal.classList.remove("hidden"); //removing the class attribute from modal element
  // overlay.classList.remove("hidden");
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
//   overlay.classList.add("hidden");
//   modal.classList.add("hidden"); //adding the class attribute from modal element

overlay.addEventListener("click", closeModal);
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden")

document.addEventListener("keydown", function (e) {
  //   console.log(e);
  //   console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
