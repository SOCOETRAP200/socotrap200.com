Je mets ça entre wallet et quoi
const connectButton = document.getElementById("connectWallet");
const walletAddress = document.getElementById("walletAddress");
const walletBalance = document.getElementById("walletBalance");

connectButton.addEventListener("click", connectWallet);

async function loadCryptoPrices() {

  try {

    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
    );

    const data = await response.json();

    const btc = data.bitcoin.usd;
    const eth = data.ethereum.usd;

    const btcChange =
      data.bitcoin.usd_24h_change.toFixed(2);

    const ethChange =
      data.ethereum.usd_24h_change.toFixed(2);

    document.getElementById("btcPrice")
      .innerHTML =
      `BTC : $${btc} (${btcChange}%)`;

    document.getElementById("ethPrice")
      .innerHTML =
      `ETH : $${eth} (${ethChange}%)`;

  } catch (error) {

    console.log("Erreur API :", error);

  }

}

async function loadCryptoPrices() {

  try {

    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
    );

    const data = await response.json();

    const btc = data.bitcoin.usd;
    const eth = data.ethereum.usd;

    const btcChange =
      data.bitcoin.usd_24h_change.toFixed(2);

    const ethChange =
      data.ethereum.usd_24h_change.toFixed(2);

    document.getElementById("btcPrice")
      .innerHTML =
      `BTC : $${btc} (${btcChange}%)`;

    document.getElementById("ethPrice")
      .innerHTML =
      `ETH : $${eth} (${ethChange}%)`;

  } catch (error) {

    console.log("Erreur API :", error);

  }

}

loadCryptoPrices();

setInterval(loadCryptoPrices, 30000);
const connectButton =
  document.getElementById("connectWallet");

const walletAddress =
  document.getElementById("walletAddress");

connectButton.onclick = async () => {

  if (window.ethereum) {

    const accounts =
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

    walletAddress.innerHTML =
      `Connected : ${accounts[0]}`;

  } else {

    alert("MetaMask non installé");

  }

};
async function loadBalance(address) {

  const apiKey = "TA_CLE_API";

  const url =
    `https://api.etherscan.io/v2/api
    ?chainid=1
    &module=account
    &action=balance
    &address=${address}
    &tag=latest
    &apikey=${apiKey}`;

  try {

    const response =
      await fetch(url.replace(/\s/g, ""));

    const data =
      await response.json();

    const balanceWei =
      data.result;

    const balanceETH =
      balanceWei / 1000000000000000000;

    document.getElementById("ethBalance")
      .innerHTML =
      `Balance : ${balanceETH.toFixed(4)} ETH`;

  } catch (error) {

    console.log(error);

  }

}
