/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let cards = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let suits = ["♦", "♥", "♠", "♣"];

  function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * cards.length);
    let randomSuit = Math.floor(Math.random() * suits.length);

    document.getElementById("card-top").innerHTML = suits[randomSuit];
    document.getElementById("card-img").innerHTML = cards[randomNumber];
    document.getElementById("card-bottom").innerHTML = suits[randomSuit];
    document.getElementById("card-bottom").style.transform = "rotate(180deg)";

    if (suits[randomSuit] === "♦" || suits[randomSuit] === "♥") {
      document.getElementById("card-top").style.color = "#d00";
      document.getElementById("card-bottom").style.color = "#d00";
    } else {
      document.getElementById("card-top").style.color = "#000000";
      document.getElementById("card-bottom").style.color = "#000000";
    }
  }
  document.getElementById("button").addEventListener("click", function() {
    getRandomCard();
  });
  setInterval(getRandomCard, 3000);
};
