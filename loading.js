const gate = document.getElementById("audioGate");
const boot = document.getElementById("boot");
const bootSfx = document.getElementById("bootSfx");

gate.addEventListener("click", () => {
  gate.classList.add("hidden");
  boot.classList.remove("hidden");

  bootSfx.currentTime = 0;
  bootSfx.play().catch(() => {});

  setTimeout(() => {
    window.location.href = "index.html";
  }, 5200);
});
