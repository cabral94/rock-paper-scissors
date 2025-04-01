const choices = ['rock', 'paper', 'scissors'];
const playerResults = [];
let playerScore = 0;
    let computerScore = 0;

function randomNumber(){
    return Math.floor(Math.random() * 3);
}

document.getElementById("rock-icon").addEventListener("click", function(){
    playGame("rock");
});

document.getElementById("paper-icon").addEventListener("click", function(){
    playGame("paper");
});

document.getElementById("scissors-icon").addEventListener("click", function(){
    playGame("scissors");
});

function playGame(playerChoice) {
    
    const computerChoice = choices[randomNumber()];
    const gif = document.getElementById("end-gif");

    let result = "";

    if (playerChoice === computerChoice){
        result = "It's a draw!"
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")){
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    document.getElementById("result").innerText =
    `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}\n\nScore — You: ${playerScore} | Robot: ${computerScore}`;

  if (playerScore === 2 || computerScore === 2) {
    const gif = document.getElementById("end-gif");
    gameOver = true;

    let finalMessage =
      playerScore === 2
        ? "You won best of 3!"
        : "The robot won best of 3!";

    document.getElementById("result").innerText += `\n\n${finalMessage}\nRefresh the page to play again.`;

    if (playerScore === 2) {
        gif.src = "robot-lost.gif"; 
      } else {
        gif.src = "happy-robot.gif"; 
      }
      gif.style.display = "block";

    document.getElementById("rock-icon").style.pointerEvents = "none";
    document.getElementById("paper-icon").style.pointerEvents = "none";
    document.getElementById("scissors-icon").style.pointerEvents = "none";
  }
}