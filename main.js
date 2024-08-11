import { refs } from "./js/refs.js";

refs.openMenuBtn.addEventListener("click", toggleMenu);

refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  refs.menu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
}

refs.openModalBtn.addEventListener("click", toggleModal);

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
}
