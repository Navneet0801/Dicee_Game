//set random number(integer) for dice 1
let randomNumber1 = Math.floor(Math.random()*6 + 1);

//set random number(integer) for dice 2
let randomNumber2 = Math.floor(Math.random()*6 + 1);

//change image for dice 1
document.querySelector(".img1").setAttribute("src" , `images/dice${randomNumber1}.png`);

//change image for dice 2
document.querySelector(".img2").setAttribute("src" , `images/dice${randomNumber2}.png`);

//Player 1 wins
if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins🎉";

//Player 2 wins
else if(randomNumber2>randomNumber1)
    document.querySelector("h1").innerHTML = "Player 2 Wins🎉";

//Mathch tied
else
    document.querySelector("h1").innerHTML = "Match Tie✨";
