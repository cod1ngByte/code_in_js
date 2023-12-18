"use strict";

/*
const x = function () {
  console.log('hello');
};

document.querySelector('.check').addEventListener('click', x);
OR
docoument.querySelector('.check').addEventListenet('click',function(){
  console.log('hello');
})

*/
//generating random number between 1 to 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;

let score = 20;
let highscore = 0;
// let highscore = document.querySelector('.highscore');
//correct function
const correctNumber = function () {
  document.querySelector(".message").textContent = "🎉 Correct Number !!";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
};
//toohigh function
const tooHigh = function () {
  document.querySelector(".message").textContent = "Too high";
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "Game-Over";
  }
};

//tooLow function
const tooLow = function () {
  document.querySelector(".message").textContent = "Too Low";
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "Game-Over";
  }
};

const btnCheck = function () {
  const userNumber = Number(document.querySelector(".guess").value);
  if (!userNumber) {
    //falsy value --> 0 | "" | NaN | undefined | null | false
    document.querySelector(".message").textContent =
      "please enter number between 1 to 20";
  } else if (userNumber == secretNumber) {
    //corectNumber function
    correctNumber();
  } else if (userNumber > secretNumber) {
    //too High functino
    tooHigh();
  } else if (userNumber < secretNumber) {
    // too low function
    tooLow();
  }
};
document.querySelector(".check").addEventListener("click", btnCheck);

const btnReset = function () {
  //reset
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".number").textContent = secretNumber;
};

document.querySelector(".again").addEventListener("click", btnReset);
