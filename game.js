rollEnabled = true

function rollDice() {
  if(rollEnabled) {
    window.parent.postMessage({type: 'gameMessage', action: 'play'}, '*');
    rollEnabled = false;
  }
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
    setTimeout(function(){ 
      alert("You Earned: " + event.data.data.points + "\r\n " + event.data.data.remainingNumber + event.data.data.remainingMessage); 
      if (event.data.data.remainingNumber > 0) {
        rollEnabled = true
      }
    }, 3000);
  }
}, false);

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

document.getElementById("roll-button").addEventListener("click", rollDice);
