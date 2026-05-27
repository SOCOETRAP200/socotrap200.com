seJe mets ça entre wallet et quoi
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
connexion metamask

↓

loadBalance(address)

↓

API etherscan

↓

affichage du solde
  }

}
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

  const response =
    await fetch(url.replace(/\s/g, ""));

  const data =
    await response.json();

  console.log(data);

  const balanceETH =
    data.result / 1000000000000000000;

  document.getElementById("ethBalance")
    .innerHTML =
    `Balance : ${balanceETH.toFixed(4)} ETH`;

}
connectButton.onclick = async () => {

  const accounts =
    await ethereum.request({
      method: "eth_requestAccounts",
    });

  const address = accounts[0];

  loadBalance(address);

};
async function loadCryptoPrices() {

  try {

    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
    );

    const data = await response.json();

    const btcPrice =
      data.bitcoin.usd;

    const ethPrice =
      data.ethereum.usd;

    const btcChange =
      data.bitcoin.usd_24h_change.toFixed(2);

    const ethChange =
      data.ethereum.usd_24h_change.toFixed(2);

    document.getElementById("btcPrice")
      .innerHTML =
      `BTC : $${btcPrice}
       (${btcChange}%)`;

    document.getElementById("ethPrice")
      .innerHTML =
      `ETH : $${ethPrice}
       (${ethChange}%)`;

  } catch (error) {

    console.log(error);

  }

}

loadCryptoPrices();

setInterval(loadCryptoPrices, 5000);
const sendBtn =
  document.getElementById("sendBtn");

const receiveBtn =
  document.getElementById("receiveBtn");

const buyBtn =
  document.getElementById("buyBtn");

const sellBtn =
  document.getElementById("sellBtn");

const actionBox =
  document.getElementById("actionBox");

sendBtn.onclick = () => {

  actionBox.innerHTML = `

    <h3>Envoyer Crypto</h3>

    <input
      type="text"
      id="receiver"
      placeholder="Adresse du destinataire"
    >

    <input
      type="number"
      id="amount"
      placeholder="Montant ETH"
    >

    <button id="confirmSend">
      Confirmer
    </button>

  `;

  document
    .getElementById("confirmSend")
    .onclick = async () => {

      const receiver =
        document.getElementById("receiver").value;

      const amount =
        document.getElementById("amount").value;

      if (!window.ethereum) {

        alert("MetaMask non installé");

        return;

      }

      const accounts =
        await ethereum.request({
          method: "eth_requestAccounts",
        });

      const sender =
        accounts[0];

      const transaction = {

        from: sender,

        to: receiver,

        value:
          (
            Number(amount) *
            1000000000000000000
          ).toString(16),

      };

      try {

        await ethereum.request({

          method: "eth_sendTransaction",

          params: [transaction],

        });

        alert("Transaction envoyée");

      } catch (error) {

        console.log(error);

      }

    };

};

receiveBtn.onclick = async () => {

  if (!window.ethereum) {

    alert("MetaMask non installé");

    return;

  }

  const accounts =
    await ethereum.request({
      method: "eth_requestAccounts",
    });

  const address =
    accounts[0];

  actionBox.innerHTML = `

    <h3>Recevoir Crypto</h3>

    <p>Adresse de dépôt :</p>

    <p>${address}</p>

    <h4>Réseaux supportés :</h4>

    <ul>
      <li>Ethereum</li>
      <li>BNB Chain</li>
      <li>Polygon</li>
    </ul>

  `;

};

buyBtn.onclick = () => {

  actionBox.innerHTML = `

    <h3>Acheter Crypto</h3>

    <p>
      Fonction d’achat bientôt disponible
    </p>

  `;

};

sellBtn.onclick = () => {

  actionBox.innerHTML = `

    <h3>Vendre Crypto</h3>

    <p>
      Fonction de vente bientôt disponible
    </p>

  `;

};
async function loadCryptoPrices() {

  try {

    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum"
    );

    const data = await response.json();

    const btc = data[0];

    const eth = data[1];

    document.getElementById("btcPrice")
      .innerHTML =
      `BTC : $${btc.current_price}
       (${btc.price_change_percentage_24h.toFixed(2)}%)`;

    document.getElementById("ethPrice")
      .innerHTML =
      `ETH : $${eth.current_price}
       (${eth.price_change_percentage_24h.toFixed(2)}%)`;

  } catch (error) {

    console.log(error);

  }

}

loadCryptoPrices();

setInterval(loadCryptoPrices, 30000);
document.addEventListener("DOMContentLoaded", () => {

  const sendBtn =
    document.getElementById("sendBtn");

  const receiveBtn =
    document.getElementById("receiveBtn");

  const buyBtn =
    document.getElementById("buyBtn");

  const sellBtn =
    document.getElementById("sellBtn");

  const actionBox =
    document.getElementById("actionBox");

  sendBtn.onclick = () => {

    actionBox.innerHTML = `

      <h3>Envoyer Crypto</h3>

      <input
        type="text"
        placeholder="Adresse destinataire"
      >

      <input
        type="number"
        placeholder="Montant"
      >

      <button>
        Confirmer
      </button>

    `;

  };

  receiveBtn.onclick = async () => {

    if (!window.ethereum) {

      alert("MetaMask non installé");

      return;

    }

    const accounts =
      await ethereum.request({
        method: "eth_requestAccounts",
      });

    actionBox.innerHTML = `

      <h3>Recevoir Crypto</h3>

      <p>
        Adresse dépôt :
      </p>

      <p>${accounts[0]}</p>

      <h4>Réseaux :</h4>

      <ul>
        <li>Ethereum</li>
        <li>BNB Chain</li>
        <li>Polygon</li>
      </ul>

    `;

  };

  buyBtn.onclick = () => {

    actionBox.innerHTML = `

      <h3>Acheter</h3>

      <p>
        Fonction bientôt disponible
      </p>

    `;

  };

  sellBtn.onclick = () => {

    actionBox.innerHTML = `

      <h3>Vendre</h3>

      <p>
        Fonction bientôt disponible
      </p>

    `;

  };

});
async function loadTransactions(address) {

  const apiKey = "TA_CLE_API";

  const url =
    `https://api.etherscan.io/v2/api
    ?chainid=1
    &module=account
    &action=txlist
    &address=${address}
    &startblock=0
    &endblock=99999999
    &page=1
    &offset=5
    &sort=desc
    &apikey=${apiKey}`;

  try {

    const response =
      await fetch(url.replace(/\s/g, ""));

    const data =
      await response.json();

    const txHistory =
      document.getElementById("txHistory");

    txHistory.innerHTML = "";

    data.result.forEach((tx) => {

      const valueETH =
        tx.value / 1000000000000000000;

      txHistory.innerHTML += `

        <div class="txCard">

          <p>
            From :
            ${tx.from.substring(0, 8)}...
          </p>

          <p>
            To :
            ${tx.to.substring(0, 8)}...
          </p>

          <p>
            Amount :
            ${valueETH.toFixed(4)} ETH
          </p>

        </div>

      `;

    });

  } catch (error) {

    console.log(error);

  }

}
async function loadMarketPrices() {

  try {

    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum"
    );

    const data = await response.json();

    const bitcoin = data[0];

    const ethereum = data[1];

    document.getElementById("btcPrice")
      .innerHTML =

      `$${bitcoin.current_price}
       (${bitcoin.price_change_percentage_24h.toFixed(2)}%)`;

    document.getElementById("ethPrice")
      .innerHTML =

      `$${ethereum.current_price}
       (${ethereum.price_change_percentage_24h.toFixed(2)}%)`;

  } catch (error) {

    console.log("Erreur API :", error);

  }

}

loadMarketPrices();

setInterval(loadMarketPrices, 30000);
