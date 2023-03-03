export function initDropdowns() {
  const dropdownBtns = document.getElementsByClassName("dropdown-button");
  for (let dropdownBtn of dropdownBtns) {
    const dropdown = document.querySelector(".dropdown-button + .dropdown");
    dropdownBtn.addEventListener("click", () =>
      toggleDropdownDisplay(dropdown)
    );
  }
}

function toggleDropdownDisplay(dropdown) {
  dropdown.classList.toggle("display");
}
