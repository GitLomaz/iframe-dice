function rollDice() {
  window.parent.postMessage({type: 'gameMessage', action: 'play'}, '*');
}

window.addEventListener("message", (event) => {
  if(event.data.data.result) {
    const dice = [...document.querySelectorAll(".die-list")];
    let counter = 0;
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = event.data.data.result[counter];
      counter++;
    });
  }
}, false);

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

document.getElementById("roll-button").addEventListener("click", rollDice);
