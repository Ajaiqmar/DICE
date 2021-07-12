var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var player1Source = "IMG/dice"+randomNumber1+".png";
var player2Source = "IMG/dice"+randomNumber2+".png";

document.querySelector(".player1").setAttribute("src",player1Source);
document.querySelector(".player2").setAttribute("src",player2Source);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent = "🚩 PLAYER 1 WINS!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").textContent = "PLAYER 2 WINS! 🚩";
}
else
{
  document.querySelector("h1").textContent = "DRAW!";
}
