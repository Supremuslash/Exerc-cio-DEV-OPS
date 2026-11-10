import "./style.css";

const frame = document.querySelector("#animation-frame");
const toggleButton = document.querySelector("#toggle-animation");
const toggleLabel = document.querySelector("#toggle-label");
const speedInput = document.querySelector("#speed");
const speedValue = document.querySelector("#speed-value");

let isPaused = false;

function updateAnimation() {
  const animationDocument = frame.contentDocument;
  if (!animationDocument) return;

  const speed = Number(speedInput.value);
  animationDocument.querySelectorAll(".bat-track").forEach((batTrack) => {
    batTrack.style.animationDuration = `${18 / speed}s`;
    batTrack.style.animationPlayState = isPaused ? "paused" : "running";
  });
  animationDocument.querySelectorAll(".bat").forEach((bat) => {
    bat.style.animationDuration = `${0.4 / speed}s`;
    bat.style.animationPlayState = isPaused ? "paused" : "running";
  });
}

frame.addEventListener("load", updateAnimation);

toggleButton.addEventListener("click", () => {
  isPaused = !isPaused;
  toggleButton.setAttribute("aria-pressed", String(isPaused));
  toggleLabel.textContent = isPaused ? "Retomar voo" : "Pausar voo";
  toggleButton.querySelector(".play-icon").textContent = isPaused ? ">" : "||";
  updateAnimation();
});

speedInput.addEventListener("input", () => {
  speedValue.value = `${Number(speedInput.value).toLocaleString("pt-BR")}x`;
  updateAnimation();
});
