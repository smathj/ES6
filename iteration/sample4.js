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

let spreadObj = [..."music"];
console.log(spreadObj);     // [ 'm', 'u', 's', 'i', 'c' ]

// String 오브젝트도 이터러블 오브젝트 라고했다.