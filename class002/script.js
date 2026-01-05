const champion = {
  name: "Morgana",
  health: 100,
  mana: 350,
  skills: [
    { key: "Q", name: "Dark Binding", cost: 50 },
    { key: "W", name: "Tormented Shadow", cost: 30 },
    { key: "E", name: "Black Shield", cost: 20 },
    { key: "R", name: "Soul Shackles", cost: 100 },
  ],
};

const canUseSkill = (skill) => {
  return skill.cost <= champion.mana;
};

function useSkill() {
  if (canUseSkill(champion.skills[0])) {
    champion.mana -= champion.skills[0].cost;
    document.getElementById(
      "status-mana"
    ).textContent = `Remaining Mana: ${champion.mana}`;
  } else {
    alert("Mana insufficient");
  }
}
