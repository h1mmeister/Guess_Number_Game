"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Try Again!!";

// document.querySelector(".guess").value = 18;
// console.log(document.querySelector(".guess").value);
let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
//console.log(number);
//document.querySelector(".number").textContent = number;

let gameRunning = false;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //console.log(typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "Invalid Number!!!";
  } else if (guess > number) {
    if (score > 5) {
      document.querySelector(".message").textContent =
        "📈 Too high, try a smaller number!";
      score -= 4;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You lost!";
      document.querySelector("body").style.backgroundColor = "#800000";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = number;
    }
  } else if (guess < number) {
    if (score > 5) {
      document.querySelector(".message").textContent =
        "📉 Too low, try a larger number!";
      score -= 4;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You lost!";
      document.querySelector("body").style.backgroundColor = "#800000";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = number;
    }
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🏆 Correct! You WON.";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#171717";
  document.querySelector(".message").textContent = "Start guessing again!!";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
