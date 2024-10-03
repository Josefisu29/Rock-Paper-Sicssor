document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const resultText = document.getElementById("read_result");
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const playerChoice = choice.getAttribute("play");
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    });
  });
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  function determineWinner(player, computer) {
    if (player == computer) {
      return "It's a draw! Try again 🥹";
    } else if (
      (player == "rock" && computer == "scissors")||
      (player == "paper" && computer == "rock")||
      (player == "scissors" && computer == "paper")||
    ) {
      return "You win Yayyy!!! 🥳";
    } else {
      return " Sorry,You lose!🥺";
    }
  }
});
