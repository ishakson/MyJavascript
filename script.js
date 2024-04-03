"use strict";

const buttons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
      modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}



closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})


document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});


overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})
