
window.addEventListener("load", start, false);

function start() {

  var roller = document.getElementById("roller");
  var rollHistory = document.getElementById("rollHistory");

  roller.addEventListener(
    "click", 
    function () {
      var nextValue = Dice.roll();
      var nextHtml = Dice.showDie("die01", nextValue);
      rollHistory.innerHTML += '<div class="dice-container">' + nextHtml + '</div>';
    }, 
    false);

  Dice.showDie("die01", 1);  
}



