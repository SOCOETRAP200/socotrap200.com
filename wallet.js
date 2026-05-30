// ==========================
// SOCOETRAP WALLET
// ==========================

// Ouvrir les détails d'un token

const tokenCards = document.querySelectorAll(".token-card");
const tokenDetails = document.getElementById("tokenDetails");
const closeDetails = document.getElementById("closeDetails");

tokenCards.forEach(card => {

    card.addEventListener("click", () => {

        const name =
            card.querySelector("h3").innerText;

        tokenDetails.classList.add("active");

        document.querySelector(
            ".details-header h2"
        ).innerText = name;

    });

});

// Fermer

closeDetails.addEventListener("click", () => {

    tokenDetails.classList.remove("active");

});

// ==========================
// Navigation active
// ==========================

const navItems =
document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav => {

            nav.classList.remove("active");

        });

        item.classList.add("active");

    });

});

// ==========================
// Variations du marché
// ==========================

function updateMarket() {

    const changes =
    document.querySelectorAll(
        ".token-right p"
    );

    changes.forEach(change => {

        const value =
        (Math.random() * 12 - 6)
        .toFixed(2);

        if(value >= 0){

            change.className =
            "positive";

            change.innerHTML =
            "+" + value + "%";

        }else{

            change.className =
            "negative";

            change.innerHTML =
            value + "%";

        }

    });

}

updateMarket();

setInterval(updateMarket, 5000);

// ==========================
// Solde simulé
// ==========================

let balance = 15240.35;

function updateBalance(){

    document.getElementById(
        "totalBalance"
    ).innerHTML =
    "$" +
    balance.toLocaleString();

}

updateBalance();

// ==========================
// Graphique Canvas
// ==========================

const canvas =
document.getElementById("chart");

if(canvas){

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    canvas.parentElement.clientWidth - 20;

    canvas.height = 220;

    function drawChart(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        let points = [];

        for(let i=0;i<25;i++){

            points.push(
                Math.random()*120+40
            );

        }

        ctx.beginPath();

        ctx.moveTo(
            0,
            points[0]
        );

        for(let i=1;i<points.length;i++){

            ctx.lineTo(
                i *
                (canvas.width / 24),
                points[i]
            );

        }

        ctx.strokeStyle =
        "#3375ff";

        ctx.lineWidth = 4;

        ctx.stroke();

    }

    drawChart();

    setInterval(
        drawChart,
        4000
    );

}

// ==========================
// Boutons actions
// ==========================

const actions =
document.querySelectorAll(
    ".action-btn"
);

actions.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

        const action =
        btn.innerText.trim();

        alert(
            action +
            " bientôt disponible"
        );

    });

});

// ==========================
// Animation d'entrée
// ==========================

window.addEventListener(
    "load",
    () => {

    document.body.style.opacity =
    "0";

    setTimeout(() => {

        document.body.style.transition =
        "0.5s";

        document.body.style.opacity =
        "1";

    },100);

});
