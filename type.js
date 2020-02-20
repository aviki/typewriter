"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  //get the text from the HTML
  element.textContent = "";
  show();
}

let element = document.querySelector(".typewritten");
console.log(element);

let sentence = document.querySelector(".typewritten").textContent;
console.log(sentence);

let getLetter = sentence[0];
console.log(getLetter);

let counter = 0;
console.log(counter);

let oneAtATime;

function show() {
  //shows the letter after each other, one at a time
  oneAtATime = sentence.substring(0, counter + 1);
  console.log(oneAtATime);

  //get the text from HTML end make it visible again
  element.textContent = oneAtATime;

  // adds one to the existing value
  counter++;

  //if the sentence is longer than the counter, runs the show function again
  if (sentence.length > counter) {
    setTimeout(show, 200);
  }
}
