function weekendThoughts(date) {
  switch (date.getDay()) {
    case 4:
    case 5:
      return "Soon it's the Weekend";
    case 0:
    case 6:
      return "It is Weekend";
    default: 
      return "Looking forward to the Weekend";
  }
}

var text = weekendThoughts(new Date());
console.log(text);