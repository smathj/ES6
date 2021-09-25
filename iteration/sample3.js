'use strict';

// Spread 연산자 : ... + 이터러블 오브젝트
// 이터러블 오브젝트의 엘리먼트를 하나씩 분리하여 전개한다
// 변수에 할당하거나 파라미터로도 사용 가능하다

/*
[생김새]
1.
[...IterableObject]

2.
function(...IterableObject)

*/

let one = [11, 12];
let two = [21, 22];
let spreadObj = [51, ...one, 52, ...two]; // 배열이 합쳐졋고 , length도 늘어낫다
// one, two를 전개(펼침)

console.log(spreadObj);
console.log(spreadObj.length);



