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
