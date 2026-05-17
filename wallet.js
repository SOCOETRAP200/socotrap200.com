let balance = 100000; // balance initiale en BIF

let assets = [
  { name: "Bitcoin", symbol: "BTC", amount: 0.002 },
  { name: "Ethereum", symbol: "ETH", amount: 0.05 },
  { name: "Dollar", symbol: "USD", amount: 50 }
];

function updateUI() {
  document.getElementById("balance").innerText = balance + " BIF";

  const list = document.getElementById("assetList");
  list.innerHTML = "";

  assets.forEach(asset => {
    let li = document.createElement("li");
    li.innerText = `${asset.name} (${asset.symbol}) : ${asset.amount}`;
    list.appendChild(li);
  });
}

function sendMoney() {
  let amount = prompt("Entrer le montant à envoyer :");
  if (amount && amount > 0) {
    balance -= amount;
    updateUI();
  }
}

function receiveMoney() {
  let amount = prompt("Montant reçu :");
  if (amount && amount > 0) {
    balance += Number(amount);
    updateUI();
  }
}

function buyAsset() {
  let name = prompt("Nom de l'actif :");
  let amount = prompt("Quantité :");

  if (name && amount) {
    assets.push({ name: name, symbol: name.toUpperCase(), amount: Number(amount) });
    updateUI();
  }
}

function sellAsset() {
  let name = prompt("Nom de l'actif à vendre :");

  assets = assets.filter(asset => asset.name !== name);
  updateUI();
}

updateUI();
