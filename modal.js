const openModalButton = document.querySelector("#openModal");
const modal = document.querySelector("#modal");

let modalTimer;

openModalButton.addEventListener("click", () => {
  modal.classList.remove("invisible");

  clearTimeout(modalTimer);

  modalTimer = setTimeout(() => {
    modal.classList.add("invisible");
  }, 5000);
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape" || event.keyCode === 27) {
    modal.classList.add("invisible");
    clearTimeout(modalTimer);
  }
});