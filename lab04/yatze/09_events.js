var counter = 0;
var rolesLeft;
var held = 0;
var totalScore;
var rounds = 13;
var roundsCounter;
var yatzees = 0;

window.onload = function() {
  var roller = document.getElementById("roller");
  rolesLeft = this.document.getElementById("rolesLeft");
  roundsCounter = this.document.getElementById("roundsLeft");
  roller.addEventListener(
    "click",
    function() {
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
        if (counter == 2) {
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
  totalScore = this.document.getElementById("totalScore");
};
function upperSection(item, number) {
  let points = 0;
  if (Dice.history.includes(number)) {
    points =
      Dice.history.filter(function(value) {
        return value === number;
      }).length * number;
    item.innerHTML = parseInt(item.innerHTML) + points;
  }
  points == 0?newRound(false):newRound(true)
}
function newRound(enabled) {
  if(enabled && rounds != 0){
    counter = -1;
    roller.disabled = false;
    rolesLeft.innerHTML = 3;
    Dice.held = [];
    die1.innerHTML = "Hold";
    die2.innerHTML = "Hold";
    die3.innerHTML = "Hold";
    die4.innerHTML = "Hold";
    die5.innerHTML = "Hold";
    held = 0;
    roller.click();
    setScore();
    rounds--;
    roundsCounter.innerHTML = rounds;
  }

}

function setScore() {
  let points = 0;

  for (let row = 1; row < 14; row++) {
    let cell = document.getElementById("scoresTable").rows[row].cells[1];
    points += parseInt(cell.innerHTML);
  }
  document.getElementById("totalScore").innerHTML = points;
}

const threeOfAKind = (item) =>{
  let counts = {};
  let kind = false
  let points = 0;
  Dice.history.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  Object.keys(counts).forEach(function(key) {
    if(counts[key] >= 3){
      kind = true;
      points = Dice.history.reduce((a, b) => a + b, 0)
    } 
  });

  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)

}
const fourOfAKind = (item) =>{
  let counts = {};
  let kind = false
  let points = 0;
  Dice.history.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  Object.keys(counts).forEach(function(key) {
    if(counts[key] >= 4){
      kind = true;
      points = Dice.history.reduce((a, b) => a + b, 0)
    } 
  });

  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)
}

const smallStraight = (item) => {
  let points = 0;
  let straight = false;

  let numbers = [... new Set(Dice.history.sort())]
  console.log(numbers);
  for (let i = 0; i<2;i++){
    if(numbers[i+1] == numbers[i] + 1 && numbers[i+2] == numbers[i] + 2 && numbers[i+3] == numbers[i] + 3 ){
      straight = true;
    } 
  }
  if(straight) points = 30;
  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)
}

const bigStraight = (item) => {
  let points = 0;
  let straight = false;

  let numbers = [... new Set(Dice.history.sort())]
  console.log(numbers);
  let i = 0;
    if(numbers[i+1] == numbers[i] + 1 && numbers[i+2] == numbers[i] + 2 && numbers[i+3] == numbers[i] + 3  && numbers[i+4] == numbers[i] + 4){
      straight = true;
  }
  if(straight) points = 40;
  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)
}

const fullHouse = (item) => {
  let points = 0;

  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)
}

const yahtzee = (item) => {
  
  let points = 0;
  if([ ... new Set(Dice.history)].length == 1){
    yatzees++;
    points = 50;
    if(yatzees > 1){
      points+=100;
    }
  }
  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)
}

const chance = (item) => {
  let points = 0;
  points = Dice.history.reduce((a, b) => a + b, 0)
  item.innerHTML = parseInt(item.innerHTML) + points;
  points == 0?newRound(false):newRound(true)
}