'use strict';
/*
is() : 값과 값 타입 비교

두개의 파라미터 값과 값 타입을 비교하여 같으면 true, 아니묜 false

1. ===              : 값, 타입 모두 비교
2. ==               : 값만 비교
3. Object.is()      : 값 타입 모두 비교

즉 1 = 3
*/


console.log("1:", Object.is(1, "1"));
console.log("2:", Object.is(NaN, NaN), NaN === NaN);
// 1: false
// 2: true false


console.log("3:", Object.is(0, -0), 0 === -0);
console.log("4:", Object.is(-0, 0), -0 === 0);
// 3: false true
// 4: false true


console.log("5:", Object.is(-0, -0), -0 === -0);
console.log("6:", Object.is(NaN, 0/0), NaN === 0/0);
// 5: true true
// 6: true false


console.log("7:", Object.is(null, null), null === null);
console.log("8:", Object.is(undefined, null), undefined === null);
// 7: true true
// 8: false false
