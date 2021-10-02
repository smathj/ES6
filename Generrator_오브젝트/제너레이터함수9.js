'use strict';

let one,two;

let gen = function*() {
  one = yield;
  two = yield one + 10;
};
let genObj = gen();

console.log(genObj.next());   // { value: undefined, done: false }
console.log(genObj.next(12)); // { value: 22, done: false }
console.log(genObj.next(34)); // { value: undefined, done: true }
console.log("two", two);      // 외부 변수인 two가 변경되었다 (two = 34)