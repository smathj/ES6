"use strict";
debugger;
//            0123 4 5 6 789
let target = "123가나다라456";
console.log("1: ", target.includes(2));         // true

console.log("2: ", target.includes("가나"));    // true

console.log("3: ", target.includes("12", 5));   // false

