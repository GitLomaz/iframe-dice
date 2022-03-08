function rollDice() {
  window.parent.postMessage({type: 'gameMessage', action: 'play'}, '*');
}

window.addEventListener("message", (event) => {
  console.log(event)
  if(event.data.data.gameResult) {
    const dice = [...document.querySelectorAll(".die-list")];
    let counter = 0;
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = event.data.data.gameResult[counter];
      counter++;
    });
  }
}, false);

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

document.getElementById("roll-button").addEventListener("click", rollDice);

window.parent.postMessage({type: 'gameMessage', action: 'getConfiguration'}, '*');