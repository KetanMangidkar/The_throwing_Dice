
var randomnumber1 = Math.floor(Math.random()*6)+1;  //generate random number

var randomdiceimg = "dice" + randomnumber1 + ".png"; // concate the random number with dice number

var randomdicesource = "images/" + randomdiceimg; // concate the source img with the img number or set on the src file of img for gteeing from source

var Img1 = document.querySelectorAll("img")[0]; //select the first img 

Img1.setAttribute("src", randomdicesource); // and setting attribute for changes images randomly

var randomnumber2 = Math.floor(Math.random()*6)+1; //same for img 2 or the dice2

var randomdicesource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdicesource2);

//If player 1 wins
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}








// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
