var a, b;

b = null;
a = b ? b : "99";
console.log(a);

b = "101";
a = b ? b : "99";
console.log(a);

// NOT SUPPORTED IN JavaScript
// b = null;
// a = b ?: "99";
// console.log(a);