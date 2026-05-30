// ============================
// PRIX CRYPTO EN TEMPS RÉEL
// ============================

async function updateMarket() {

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd&include_24hr_change=true"
        );

        const data = await response.json();

        // Bitcoin
        document.getElementById("btcPrice").innerHTML =
            "$" + data.bitcoin.usd.toLocaleString();

        document.getElementById("btcChange").innerHTML =
            data.bitcoin.usd_24h_change.toFixed(2) + "%";

        // Ethereum
        document.getElementById("ethPrice").innerHTML =
            "$" + data.ethereum.usd.toLocaleString();

        document.getElementById("ethChange").innerHTML =
            data.ethereum.usd_24h_change.toFixed(2) + "%";

        // BNB
        document.getElementById("bnbPrice").innerHTML =
            "$" + data.binancecoin.usd.toLocaleString();

        document.getElementById("bnbChange").innerHTML =
            data.binancecoin.usd_24h_change.toFixed(2) + "%";

        // USDT
        document.getElementById("usdtPrice").innerHTML =
            "$" + data.tether.usd;

        const btc24h =
            data.bitcoin.usd_24h_change.toFixed(2);

        const marketStatus =
            document.getElementById("marketStatus");

        if (btc24h >= 0) {

            marketStatus.innerHTML =
                "▲ BTC +" + btc24h + "%";

            marketStatus.style.color =
                "#22c55e";

        } else {

            marketStatus.innerHTML =
                "▼ BTC " + btc24h + "%";

            marketStatus.style.color =
                "#ef4444";
        }

    } catch (error) {

        console.log(error);

        document.getElementById(
            "marketStatus"
        ).innerHTML =
            "Marché indisponible";
    }
}

updateMarket();

setInterval(
    updateMarket,
    30000
);


// ============================
// MODALES
// ============================

function openModal(id) {

    document.getElementById(id)
        .style.display = "flex";
}

function closeModal(id) {

    document.getElementById(id)
        .style.display = "none";
}


// ============================
// ENVOYER
// ============================

function sendCrypto() {

    alert(
        "Fonction d'envoi prête pour intégration blockchain."
    );

    closeModal("sendModal");
}


// ============================
// ACHETER
// ============================

function buyCrypto() {

    alert(
        "Acheter : à connecter à un fournisseur de paiement."
    );
}


// ============================
// SWAP
// ============================

function swapCrypto() {

    const fromCoin =
        document.getElementById(
            "fromCoin"
        ).value;

    const toCoin =
        document.getElementById(
            "toCoin"
        ).value;

    const amount =
        document.getElementById(
            "swapAmount"
        ).value;

    if (
        amount === "" ||
        amount <= 0
    ) {

        alert(
            "Entrez un montant valide."
        );

        return;
    }

    alert(
        "Swap simulé : " +
        amount +
        " " +
        fromCoin +
        " → " +
        toCoin
    );

    closeModal("swapModal");
}


// ============================
// SOLDE DYNAMIQUE
// ============================

let walletBalance = 24580;

setInterval(() => {

    const randomMove =
        Math.floor(
            Math.random() * 300 - 150
        );

    walletBalance +=
        randomMove;

    if (
        walletBalance < 1000
    ) {

        walletBalance = 1000;
    }

    document.getElementById(
        "balance"
    ).innerHTML =
        "$" +
        walletBalance.toLocaleString() +
        ".00";

}, 5000);


// ============================
// FERMETURE MODALE
// ============================

window.onclick = function(event) {

    const modals =
        document.querySelectorAll(
            ".modal"
        );

    modals.forEach(modal => {

        if (
            event.target === modal
        ) {

            modal.style.display =
                "none";
        }

    });

};
