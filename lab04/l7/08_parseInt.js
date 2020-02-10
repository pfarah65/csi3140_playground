
var rawInput = "89";

var grade = parseInt(rawInput);
if (isNaN(grade)) {
  console.log("Unable to process grade " + rawInput);
} else {
  grade += 3;
  console.log("After the 3% bonus, your grade is now " + grade);
}

