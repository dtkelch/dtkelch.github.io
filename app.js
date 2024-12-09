// @ts-check

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("close");

  const showModal = () => {
    overlay.style.display = "block";
    modal.style.display = "block";
    window.removeEventListener("blur", showModal);
  };

  const closeModal = () => {
    overlay.style.display = "none";
    modal.style.display = "none";
  };

  window.addEventListener("blur", showModal);

  closeButton.addEventListener("click", () => {
    closeModal();
  });
});
