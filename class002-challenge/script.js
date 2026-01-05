const championName = "Akali";
const MAX_ENERGY = 100;
const REGEN_AMOUNT = 5;
const REGEN_INTERVAL = 500;

let currentEnergy = 100;

const skills = {
  Q: { name: "Five Point Strike", cost: 30 },
  W: { name: "Twilight Shroud", cost: -20 },
  E: { name: "Shuriken Flip", cost: 10 },
  R: { name: "Perfect Execution", cost: 50 },
};

function startRegeneration() {
  setInterval(() => {
    if (currentEnergy < MAX_ENERGY) {
      currentEnergy = Math.min(MAX_ENERGY, currentEnergy + REGEN_AMOUNT);
      updateUI();
    }
  }, REGEN_INTERVAL);
}

function handleInput(key) {
  const skillKey = key.toUpperCase();
  const skill = skills[skillKey];

  if (!skill) return;

  if (currentEnergy >= skill.cost) {
    currentEnergy -= skill.cost;
    console.log(`${championName} used ${skill.name}!`);
    updateUI();
  } else {
    console.warn(`Not enough energy for ${skill.name}!`);
    alert(`Not enough energy for ${skill.name}!`);
  }
}

function updateUI() {
  const statusElement = document.getElementById("energy-status");
  if (statusElement) {
    statusElement.innerText = `Remaining energy: ${currentEnergy}`;
  }

  console.log(`Energy: ${currentEnergy}/${MAX_ENERGY}`);
}

window.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();
  if (skills[pressedKey]) {
    handleInput(pressedKey);
  }
});

updateUI();
startRegeneration();
