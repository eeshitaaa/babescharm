const locket = document.querySelector("#locket");
const locketText = document.querySelector("#locketText");
const frontEngraving = document.querySelector("#frontEngraving");
const charCount = document.querySelector("#charCount");
const flipButton = document.querySelector("#flipButton");
const finishButtons = document.querySelectorAll("[data-finish]");

function updateEngraving() {
  const value = locketText.value.trim() || " ";
  frontEngraving.replaceChildren();
  [...value].forEach((character, index) => {
    if (index > 0 && index % 8 === 0) {
      frontEngraving.append(document.createElement("br"));
    }
    frontEngraving.append(document.createTextNode(character));
  });
  charCount.textContent = locketText.value.length + "/16";
}

locketText.addEventListener("input", updateEngraving);

flipButton.addEventListener("click", () => {
  const showingBack = locket.classList.toggle("is-back");
  flipButton.setAttribute("aria-pressed", String(showingBack));
  flipButton.lastChild.textContent = showingBack ? " show front" : " show back";
});

finishButtons.forEach((button) => {
  button.addEventListener("click", () => {
    finishButtons.forEach((option) => {
      const active = option === button;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-pressed", String(active));
    });
    locket.dataset.finish = button.dataset.finish;
  });
});

updateEngraving();
