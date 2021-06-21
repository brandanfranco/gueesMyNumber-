"use strict";

let numberGuees = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = " IS NOT  NUMBER";
  } else if (guess === numberGuees) {
    document.querySelector(".number").textContent = numberGuees;
    // document.querySelector(".message").textContent = "CORRECT NUMBER";
    displayMessage("CORRECT NUMBER !!!");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== numberGuees) {
    if (score > 1) {
      displayMessage(
        guess > numberGuees ? " IS TOO HIGHT!!!" : "IS TOO LOW!!!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("GAME OVER!!!!!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  numberGuees = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";
});
