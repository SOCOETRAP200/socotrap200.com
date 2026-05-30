// =====================================
// PRIX CRYPTO EN TEMPS RÉEL
// =====================================

async function updatePrices() {

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd&include_24hr_change=true"
        );

        const data = await response.json();

        document.getElementById("btcPrice").innerText =
            "$" + data.bitcoin.usd.toLocaleString();

        document.getElementById("ethPrice").innerText =
            "$" + data.ethereum.usd.toLocaleString();

        document.getElementById("bnbPrice").innerText =
            "$" + data.binancecoin.usd.toLocaleString();

        document.getElementById("usdtPrice").innerText =
            "$" + data.tether.usd.toLocaleString();

        const btcChange =
            data.bitcoin.usd_24h_change.toFixed(2);

        const marketStatus =
            document.getElementById("marketStatus");

        if (btcChange >= 0) {

            marketStatus.innerHTML =
                "▲ BTC +" + btcChange + "%";

            marketStatus.style.color =
                "#22c55e";

        } else {

            marketStatus.innerHTML =
                "▼ BTC " + btcChange + "%";

            marketStatus.style.color =
                "#ef4444";

        }

    } catch (error) {

        console.log(
            "Erreur API :",
            error
        );

        document.getElementById(
            "marketStatus"
        ).innerHTML =
            "Marché indisponible";
    }

}

updatePrices();

setInterval(
    updatePrices,
    30000
);


// =====================================
// MODALES
// =====================================

function openModal(id) {

    document.getElementById(id)
        .style.display = "flex";

}

function closeModal(id) {

    document.getElementById(id)
        .style.display = "none";

}


// =====================================
// ENVOYER
// =====================================

function sendCrypto() {

    alert(
        "Transaction simulée avec succès."
    );

    closeModal("sendModal");

}


// =====================================
// RECEVOIR
// =====================================

function receiveCrypto() {

    alert(
        "Adresse copiée."
    );

}


// =====================================
// ACHETER
// =====================================

function buyCrypto() {

    alert(
        "Fonction Acheter prête pour intégration."
    );

}


// =====================================
// VENDRE
// =====================================

function sellCrypto() {

    alert(
        "Fonction Vendre prête pour intégration."
    );

}


// =====================================
// SWAP
// =====================================

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
            "Entre un montant valide."
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

}


// =====================================
// ANIMATION SOLDE
// =====================================

let walletBalance = 24580;

setInterval(() => {

    const randomVariation =
        Math.floor(
            Math.random() * 400 - 200
        );

    walletBalance +=
        randomVariation;

    if (
        walletBalance < 1000
    ) {

        walletBalance =
            1000;

    }

    document.getElementById(
        "balance"
    ).innerHTML =
        "$" +
        walletBalance.toLocaleString() +
        ".00";

}, 5000);


// =====================================
// FERMER MODALE EN CLIQUANT À L'EXTÉRIEUR
// =====================================

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
