'use strict';

let regexpObj = /CD/y;
// y 플래그 사용

console.log("1 : ", regexpObj.lastIndex);
console.log("2 : ", regexpObj.test("ABCDEF"));

regexpObj.lastIndex = 2;
console.log("3 : ", regexpObj.test("ABCDEF"));
console.log("4 : ", regexpObj.lastIndex);
console.log("5 : ", regexpObj.test("0123CD"));
console.log("6 : ", regexpObj.lastIndex);