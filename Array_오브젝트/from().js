'use strict';

/*
[ 파라미터 ]
1 : 변환대상, Array-like, 이터러블 오브젝트
2 : 옵션, 콜백함수
3 : 옵션, 콜백함수가 참조할 this

*/

let arrayObj = Array.from({ 0 : 'zero', 1 : 'one', length : 2});
console.log(Array.isArray(arrayObj));   // true
console.log(arrayObj);                  // [ 'zero', 'one' ]

let stringObj = Array.from("ABC");
console.log(stringObj);                 // [ 'A', 'B', 'C' ]