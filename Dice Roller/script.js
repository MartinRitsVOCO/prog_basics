document.getElementById("diceRollButton").addEventListener("click", rollDice);
const diceGrid = document.getElementById("diceGrid");
const diceCounter = document.getElementById("diceCounter");

function rollDice(e) {
    e.preventDefault();

    const diceNumber = document.getElementById("diceNumber").value;
    const diceRolls = [];
    diceGrid.innerHTML = "";
    diceCounter.innerHTML = "";
    for (let i = 0; i < diceNumber; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(diceRoll);
        const dice = document.createElement("div");
        dice.classList.add("dice");
        dice.classList.add("dice-" + diceRoll);
        diceGrid.appendChild(dice);
    }
    diceCounter.innerHTML = "Dice Rolls: " + diceRolls.join(", ");
}