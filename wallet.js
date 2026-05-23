Je mets ça entre wallet et quoi
const connectButton = document.getElementById("connectWallet");
const walletAddress = document.getElementById("walletAddress");
const walletBalance = document.getElementById("walletBalance");

connectButton.addEventListener("click", connectWallet);

async function connectWallet() {
if (!window.ethereum) {
alert("Aucun wallet compatible détecté. Installez MetaMask ou Trust Wallet.");
return;
}
addTransaction("Connexion", "0");
try {
const accounts = await window.ethereum.request({
method: "eth_requestAccounts"
});

const account = accounts[0];  
walletAddress.textContent = account;  

const provider = new ethers.providers.Web3Provider(window.ethereum);  
const balance = await provider.getBalance(account);  

walletBalance.textContent =  
  parseFloat(ethers.utils.formatEther(balance)).toFixed(4) + " ETH";

} catch (error) {
console.error(error);
alert("Connexion annulée ou erreur.");
}
}
const marketStatus = document.getElementById("marketStatus");

function updateMarket() {

  const random = Math.random();

  if (random > 0.5) {
    marketStatus.textContent = "▲ Haussier";
    marketStatus.className = "bullish";
  } else {
    marketStatus.textContent = "▼ Baissier";
    marketStatus.className = "bearish";
  }
}

updateMarket();
const transactionList = document.getElementById("transactionList");

function addTransaction(type, amount) {

  transactionList.innerHTML = "";

  const li = document.createElement("li");

  li.textContent =
    `${type} : ${amount} ETH - ${new Date().toLocaleTimeString()}`;

  transactionList.appendChild(li);
}
const transactionList = document.getElementById("transactionList");

function addTransaction(type, amount) {

  transactionList.innerHTML = "";

  const li = document.createElement("li");

  li.textContent =
    `${type} : ${amount} ETH - ${new Date().toLocaleTimeString()}`;

  transactionList.appendChild(li);
     const transactionList = document.getElementById("transactionList");

function addTransaction(type, amount) {

  transactionList.innerHTML = "";

  const li = document.createElement("li");

  li.textContent =
    `${type} : ${amount} ETH - ${new Date().toLocaleTimeString()}`;

  transactionList.appendChild(li);
}                   }
function disconnectWallet() {

  document.getElementById("walletAddress").textContent =
    "Non connecté";

  document.getElementById("walletBalance").textContent =
    "0";
}
async function connectWalletConnect() {

  const provider = new WalletConnectProvider.default({
    rpc: {
      1: "https://mainnet.infura.io/v3/"
    }
  });

  await provider.enable();

  alert("WalletConnect connecté");
}
const marketStatus =
  document.getElementById("marketStatus");

function updateMarket() {

  const variation =
    (Math.random() * 10 - 5).toFixed(2);

  if (variation >= 0) {

    marketStatus.innerHTML =
      `▲ +${variation}%`;

    marketStatus.className =
      "market bullish";

  } else {

    marketStatus.innerHTML =
      `▼ ${variation}%`;

    marketStatus.className =
      "market bearish";
  }
}

updateMarket();

setInterval(updateMarket, 3000);
