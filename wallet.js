const marketStatus = document.getElementById("marketStatus");
const balance = document.getElementById("balance");

function updateMarket() {

  const variation = (Math.random() * 10 - 5).toFixed(2);

  if (variation >= 0) {

    marketStatus.innerHTML = `▲ +${variation}%`;
    marketStatus.style.color = "#22c55e";

  } else {

    marketStatus.innerHTML = `▼ ${variation}%`;
    marketStatus.style.color = "#ef4444";
  }
}

setInterval(updateMarket, 3000);

updateMarket();


// Animation du solde
let currentBalance = 24580;

setInterval(() => {

  const random = Math.floor(Math.random() * 300 - 150);

  currentBalance += random;

  balance.innerHTML = `$${currentBalance.toLocaleString()}.00`;

}, 4000);


// Boutons
const buttons = document.querySelectorAll('.action-btn');

buttons.forEach((btn) => {

  btn.addEventListener('click', () => {

    alert(btn.innerText + ' bientôt disponible');

  });

});
