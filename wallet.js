// ==========================
// NAVIGATION
// ==========================

function showPage(pageId) {

    document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.remove("active");

    });

    document
    .getElementById(pageId)
    .classList.add("active");

}

// ==========================
// VARIABLES MARCHÉ
// ==========================

let btcPrice = 0;
let ethPrice = 0;
let bnbPrice = 0;
let usdtPrice = 1;

// ==========================
// PRIX TEMPS RÉEL
// ==========================

async function updateMarket() {

    try {

        const response =
        await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd&include_24hr_change=true"
        );

        const data =
        await response.json();

        btcPrice =
        data.bitcoin.usd;

        ethPrice =
        data.ethereum.usd;

        bnbPrice =
        data.binancecoin.usd;

        usdtPrice =
        data.tether.usd;

        document.getElementById(
        "btcPrice").innerHTML =
        "$" +
        btcPrice.toLocaleString();

        document.getElementById(
        "ethPrice").innerHTML =
        "$" +
        ethPrice.toLocaleString();

        document.getElementById(
        "bnbPrice").innerHTML =
        "$" +
        bnbPrice.toLocaleString();

        document.getElementById(
        "usdtPrice").innerHTML =
        "$" +
        usdtPrice;

        document.getElementById(
        "btcChange").innerHTML =
        data.bitcoin
        .usd_24h_change
        .toFixed(2) + "%";

        document.getElementById(
        "ethChange").innerHTML =
        data.ethereum
        .usd_24h_change
        .toFixed(2) + "%";

        document.getElementById(
        "bnbChange").innerHTML =
        data.binancecoin
        .usd_24h_change
        .toFixed(2) + "%";

        document.getElementById(
        "marketStatus"
        ).innerHTML =

        "BTC $" +

        btcPrice.toLocaleString();

    }

    catch(error) {

        console.log(error);

    }

}

updateMarket();

setInterval(
updateMarket,
30000
);

// ==========================
// CONNEXION METAMASK
// ==========================

async function connectWallet() {

    if (!window.ethereum) {

        alert(
        "MetaMask n'est pas installé."
        );

        return;

    }

    try {

        await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        const provider =
        new ethers.BrowserProvider(
        window.ethereum
        );

        const signer =
        await provider.getSigner();

        const address =
        await signer.getAddress();

        const balance =
        await provider.getBalance(
        address
        );

        document.getElementById(
        "walletAddress"
        ).innerHTML =
        address;

        document.getElementById(
        "walletBalance"
        ).innerHTML =

        parseFloat(
        ethers.formatEther(balance)
        ).toFixed(4)

        + " ETH";

    }

    catch(error) {

        console.log(error);

    }

}

// ==========================
// SWAP
// ==========================

function calculateSwap() {

    const amount =
    parseFloat(
    document.getElementById(
    "swapAmount"
    ).value
    );

    const fromCoin =
    document.getElementById(
    "fromCoin"
    ).value;

    const toCoin =
    document.getElementById(
    "toCoin"
    ).value;

    if (isNaN(amount)) {

        document.getElementById(
        "swapResult"
        ).innerHTML =
        "Vous recevrez...";

        return;

    }

    let usdValue = 0;

    if (fromCoin === "BTC") {

        usdValue =
        amount * btcPrice;

    }

    if (fromCoin === "ETH") {

        usdValue =
        amount * ethPrice;

    }

    if (fromCoin === "BNB") {

        usdValue =
        amount * bnbPrice;

    }

    if (fromCoin === "USDT") {

        usdValue =
        amount;

    }

    let result = 0;

    if (toCoin === "BTC") {

        result =
        usdValue / btcPrice;

    }

    if (toCoin === "ETH") {

        result =
        usdValue / ethPrice;

    }

    if (toCoin === "BNB") {

        result =
        usdValue / bnbPrice;

    }

    if (toCoin === "USDT") {

        result =
        usdValue;

    }

    document.getElementById(
    "swapResult"
    ).innerHTML =

    "Vous recevrez environ "

    +

    result.toFixed(6)

    +

    " "

    +

    toCoin;

}

function swapCrypto() {

    calculateSwap();

    alert(
    "Simulation de swap effectuée."
    );

}

// ==========================
// PWA
// ==========================

if ("serviceWorker" in navigator) {

    window.addEventListener(
    "load",

    () => {

        navigator.serviceWorker
        .register(
        "./service-worker.js"
        )

        .then(() => {

            console.log(
            "Service Worker installé"
            );

        })

        .catch(error => {

            console.log(error);

        });

    });

}
