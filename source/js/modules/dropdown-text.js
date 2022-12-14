export const dropdownText = function () {
  const btnDropdown = document.querySelector("[data-dropdown]");
  const infoContainer = document.querySelector("[data-dropdown-box]");

  if (btnDropdown) {
    btnDropdown.addEventListener("click", function (evt) {
      evt.preventDefault();

      if (infoContainer.closest(".is-active")) {
        infoContainer.classList.remove("is-active");
        btnDropdown.textContent = "Подробнее";
      } else {
        infoContainer.classList.add("is-active");
        btnDropdown.textContent = "Свернуть";
      }
    });
  }
};
