const modeContent = {
  builder: {
    summary:
      "Designing systems that turn unstructured workflows into reliable software.",
    signals: [
      ["Now", "Structuring maritime communication flows"],
      ["Tracking", "Agent handoffs and operational state"],
      ["Next", "Products that change the workflow, not just the task"],
    ],
  },
  founder: {
    summary:
      "Building products where AI changes the operating model, not just the task list.",
    signals: [
      ["Now", "Operational intelligence inside Chartera"],
      ["Tracking", "AI-native product wedges and distribution"],
      ["Next", "Software that compounds trust with every workflow"],
    ],
  },
  future: {
    summary:
      "Following how intelligence reshapes coordination, institutions, and leverage.",
    signals: [
      ["Now", "Governance and power in AI systems"],
      ["Tracking", "Coordination interfaces for abundant intelligence"],
      ["Next", "Long-range product bets that survive capability shifts"],
    ],
  },
};

const body = document.body;
const summary = document.getElementById("mode-summary");
const signalLog = document.getElementById("signal-log");
const buttons = document.querySelectorAll("[data-mode-button]");

function renderMode(mode) {
  const content = modeContent[mode];
  if (!content || !summary || !signalLog) {
    return;
  }

  body.dataset.mode = mode;
  summary.textContent = content.summary;
  signalLog.innerHTML = content.signals
    .map(
      ([label, text]) =>
        `<li><span>${label}</span><strong>${text}</strong></li>`
    )
    .join("");

  buttons.forEach((button) => {
    const active = button.dataset.modeButton === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    renderMode(button.dataset.modeButton);
  });
});

renderMode(body.dataset.mode || "builder");
