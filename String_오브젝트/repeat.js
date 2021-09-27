"use strict";
debugger;

// 문자열 복제 , repeat();

let target = "123";
console.log("1:", target.repeat(3));    // 3번복제

console.log("2:", target.repeat(0));    // "" 리턴

console.log("3:", target.repeat(2.7));  // 0.7을버리고 2번 복제

