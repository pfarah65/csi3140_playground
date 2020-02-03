var err = function() {
  throw {message: "This is not the javascript you are looking for"};
}

if (false) {
  err();
} else {
  console.log("false is falsey");
}

if ("") {
  err();
} else {
  console.log("Empty string is falsey");
}

if (0) {
  err();
} else {
  console.log("0 (and -0) integers are falsey");
}

if (null) {
  err();
} else {
  console.log("null falsey");
}

if (undefined) {
  err();
} else {
  console.log("undefined falsey");
}

if (NaN) {
  err();
} else {
  console.log("NaN falsey");
}