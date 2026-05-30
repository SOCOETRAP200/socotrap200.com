// Navigation entre les pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

// Connexion MetaMask
async function connectWallet() {

    if (!window.ethereum) {
        alert("MetaMask n'est pas installé.");
        return;
    }

    try {

        const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
        });

        const address = accounts[0];

        document.getElementById("walletAddress").innerText = address;

        const provider = new ethers.BrowserProvider(window.ethereum);

        const balance = await provider.getBalance(address);

        const ethBalance = ethers.formatEther(balance);

        document.getElementById("walletBalance").innerText =
            parseFloat(ethBalance).toFixed(4) + " ETH";

    } catch (error) {

        console.error(error);

    }
}

// Copier adresse
function copyAddress() {

    const address =
        document.getElementById("walletAddress").innerText;

    if (
        address === "Non connecté"
    ) {
        alert("Connectez MetaMask d'abord");
        return;
    }

    navigator.clipboard.writeText(address);

    alert("Adresse copiée");
}

// Prix crypto en temps réel
async function loadPrices() {

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd&include_24hr_change=true"
        );

        const data = await response.json();

        document.getElementById("btcPrice").innerText =
            "$" + data.bitcoin.usd;

        document.getElementById("ethPrice").innerText =
            "$" + data.ethereum.usd;

        document.getElementById("bnbPrice").innerText =
            "$" + data.binancecoin.usd;

        document.getElementById("usdtPrice").innerText =
            "$" + data.tether.usd;

        setChange(
            "btcChange",
            data.bitcoin.usd_24h_change
        );

        setChange(
            "ethChange",
            data.ethereum.usd_24h_change
        );

        setChange(
            "bnbChange",
            data.binancecoin.usd_24h_change
        );

        const marketAverage =
            (
                data.bitcoin.usd_24h_change +
                data.ethereum.usd_24h_change +
                data.binancecoin.usd_24h_change
            ) / 3;

        const marketStatus =
            document.getElementById("marketStatus");

        if (marketAverage >= 0) {

            marketStatus.innerHTML =
                "📈 Marché haussier +" +
                marketAverage.toFixed(2) +
                "%";

        } else {

            marketStatus.innerHTML =
                "📉 Marché baissier " +
                marketAverage.toFixed(2) +
                "%";

        }

    } catch (error) {

        console.error(error);

    }
}

// Couleurs variation
function setChange(elementId, value) {

    const element =
        document.getElementById(elementId);

    const percent =
        parseFloat(value).toFixed(2);

    if (value >= 0) {

        element.innerHTML =
            "+" + percent + "%";

        element.className =
            "positive";

    } else {

        element.innerHTML =
            percent + "%";

        element.className =
            "negative";

    }
}

// QR Code
function generateQRCode() {

    const qrContainer =
        document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text:
            document.getElementById("walletAddress").innerText ||
            "SOCO-WALLET",
        width: 150,
        height: 150
    });
}

// Calcul swap démo
function calculateSwap() {

    const amount =
        parseFloat(
            document.getElementById("swapAmount").value
        ) || 0;

    document.getElementById("swapResult").innerText =
        "Vous recevrez " +
        amount.toFixed(4);
}

// Swap démo
function swapCrypto() {

    const amount =
        document.getElementById("swapAmount").value;

    if (!amount || amount <= 0) {

        alert("Entrez un montant valide");

        return;

    }

    alert(
        "Swap simulé avec succès"
    );
}

// Enregistrement service worker
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register(
            "service-worker.js"
        );

    });

}

// Initialisation
window.onload = () => {

    loadPrices();

    setInterval(
        loadPrices,
        30000
    );

    generateQRCode();

};
