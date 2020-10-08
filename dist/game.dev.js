"use strict";

// Store the values.
var tools = ["Rock", "Paper", "Scissors"]; // Get the player's name.

var name = prompt("Welcome to 'Rock Paper Scissors' game,\nWhat is your name?"); // Capialize the prompt.

var capialize = function capialize(arg) {
  return name[0].toUpperCase() + name.substr(1, arg.lenght).toLowerCase();
}; // Get the player's tool.


var p1 = prompt("Hey, " + capialize(name) + "!\nType r for Rock, p for Paper or s for Scissors.\nGood Luck!"); // Converting p1's prompt.

if (p1 == "r") {
  p1 = "Rock";
} else if (p1 == "p") {
  p1 = "Paper";
} else if (p1 == "s") {
  p1 = "Scissors";
} else {
  console.log("WRONG LETTER!!!");
} // Get random answer from computer.


var randomTool = tools[Math.floor(Math.random() * tools.length)];
console.log("Hmm... " + p1 + ".\nAgainst " + randomTool + "???"); // Compare the prompts.

if (randomTool == p1) {
  console.log("There is a TIE.");
} else {
  if (p1 == "Rock" && randomTool == "Paper") {
    console.log("You lost, " + capialize(name) + "!\nDon't cry...");
  } else if (p1 == "Paper" && randomTool == "Scissors") {
    console.log("You lost, " + capialize(name) + "!\nDon't cry...");
  } else if (p1 == "Scissors" && randomTool == "Rock") {
    console.log("You lost, " + capialize(name) + "!\nDon't cry...");
  } else {
    console.log("Great!!! you won, " + capialize(name) + "!");
  }
}