"use strict";
debugger;

let target = "123가나다";
console.log("1:", target.startsWith(123));             // true
console.log("2:", target.startsWith("123"));           // true

console.log("3:", target.startsWith("23"));            // false

console.log("4:", target.startsWith("가나", 3));       // true


