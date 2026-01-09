const champion = "Volibear";
let inventory = [];

function showInventory() {
  console.log(`---Inventory---`);

  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];

    console.log(`Slot ${i + 1}: ${item}`);
  }
}

showInventory();

function buyItem(item) {
  if (inventory.length <= 6) {
    inventory.push(item);
    console.log(`Added ${item} to inventory`);
  } else {
    console.log("Inventory is full");
  }
}

buyItem("Trinity Force");
showInventory();
