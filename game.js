function getComputerChoice() {
    const gameValues = new Array("Rock", "Paper", "Scissors");

    const randomizedGameValue = gameValues[Math.floor(Math.random()*gameValues.length)];

    return randomizedGameValue;
}

console.log(getComputerChoice());