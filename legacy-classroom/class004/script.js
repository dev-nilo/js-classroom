const inputItem = document.querySelector("#input-item");
const buttonBuyItem = document.querySelector("#buy-item");
const inventoryList = document.querySelector("#inventory-list");

let inventory = [];

function renderInventory() {
  inventoryList.innerHTML = document.createElement("li").textContent;
}

function addItem() {
  let item = inputItem.value.trim();

  if (item !== "") {
    inventory.push(item);
    inputItem.value = "";
    console.log(inventory);
  } else {
    alert("Please enter an item");
  }
}

const handleAddItem = (e) => {
  if (e.type === "click" || e.key === "Enter") {
    e.preventDefault();
    addItem();
  }
};

buttonBuyItem.addEventListener("click", handleAddItem);
inputItem.addEventListener("keypress", handleAddItem);
