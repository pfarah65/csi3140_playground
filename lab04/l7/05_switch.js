var text = null;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it's the Weekend";
    break; 
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default: 
    text = "Looking forward to the Weekend";
}
console.log(text);