var counter = 0;
var rolesLeft;
window.onload = function() {
  let held = 0;


  var roller = document.getElementById("roller");
  rolesLeft = this.document.getElementById('rolesLeft')
  roller.addEventListener(
    "click",
    function() {
      console.log(counter);
      if (counter < 2) {
        rolesLeft.innerHTML--;
        for (let i = 0; i < 5; i++) {
          if (Dice.held.length == 0) {
            Dice.showDie("die0" + (i + 1), Dice.roll(i));
          }
          if (Dice.held.length == 1 && Dice.held[0] != i) {
            Dice.showDie("die0" + (i + 1), Dice.roll(i));
          }
          if (Dice.held.length == 2 && Dice.held[0] != i && Dice.held[1] != i) {
            Dice.showDie("die0" + (i + 1), Dice.roll(i));
          }
          if (
            Dice.held.length == 3 &&
            Dice.held[0] != i &&
            Dice.held[1] != i &&
            Dice.held[2] != i
          ) {
            Dice.showDie("die0" + (i + 1), Dice.roll(i));
          }
          if (
            Dice.held.length == 4 &&
            Dice.held[0] != i &&
            Dice.held[1] != i &&
            Dice.held[2] != i &&
            Dice.held[3] != i
          ) {
            Dice.showDie("die0" + (i + 1), Dice.roll(i));
          }
          if (
            Dice.held.length == 5 &&
            Dice.held[0] != i &&
            Dice.held[1] != i &&
            Dice.held[2] != i &&
            Dice.held[3] != i &&
            Dice.held[4] != i
          ) {
            Dice.showDie("die0" + (i + 1), Dice.roll(i));
          }
        }
        counter++;
        if(counter == 2) {
          roller.disabled = true;
          counter = 0;
        }
      }
    },
    false
  );
  Dice.showDie("die01", Dice.roll(0));
  Dice.showDie("die02", Dice.roll(1));
  Dice.showDie("die03", Dice.roll(2));
  Dice.showDie("die04", Dice.roll(3));
  Dice.showDie("die05", Dice.roll(4));

  var die1 = document.getElementById("die1");
  die1.addEventListener(
    "click",
    function() {
      if (held < 5) {
        Dice.hold(0);
        die1.innerHTML = "Held";
        held++;
      }
    },
    false
  );
  var die2 = document.getElementById("die2");
  die2.addEventListener(
    "click",
    function() {
      if (held < 5) {
        Dice.hold(1);
        die2.innerHTML = "Held";
        held++;
      }
    },
    false
  );
  var die3 = document.getElementById("die3");
  die3.addEventListener(
    "click",
    function() {
      if (held < 5) {
        Dice.hold(2);
        die3.innerHTML = "Held";
        held++;
      }
    },
    false
  );
  var die4 = document.getElementById("die4");
  die4.addEventListener(
    "click",
    function() {
      if (held < 5) {
        Dice.hold(3);
        die4.innerHTML = "Held";
        held++;
      }
    },
    false
  );
  var die5 = document.getElementById("die5");
  die5.addEventListener(
    "click",
    function() {
      if (held < 5) {
        Dice.hold(4);
        die5.innerHTML = "Held";
        held++;
      }
    },
    false
  );
};
function upperSection(item,number){
  console.log(item.innerHTML);
  if(Dice.history.includes(number)){


    let points =     Dice.history.filter(function(value){
      return value === number;
  }).length * number
    item.innerHTML= parseInt(item.innerHTML)+points;
    counter = -1;
    roller.disabled = false;
    rolesLeft.innerHTML = 3;
    Dice.held = [];
    die1.innerHTML = "Hold";
    die2.innerHTML = "Hold";
    die3.innerHTML = "Hold";
    die4.innerHTML = "Hold";
    die5.innerHTML = "Hold";

    roller.click();

  }
  console.log(number);
}
