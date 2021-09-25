/*
이터레이터는 반복의 의미를 갖는데
쨔스에서는 두가지로 분류된다

1. Iterable 프로토콜(이터러블)
   - 뭐가되었든 Symbol.iterator 가 있으면 Iterable 프로토콜이된다(상속포함)
ex) Array, Map, Set, String, Argument, Dom's NodeList


2. Iterator 프로토콜(이터레이터)
   - 오브젝트의 값을 차례대로 처리할 수 있는 방법을 제공한다
   - 오브젝트에 next() 메서드가 있으면 이터레이터 프로토콜이다

*/

let arrayObj = [];
let result = arrayObj[Symbol.iterator]; // 프로퍼티 값거낸거임
console.log(result);                    // ƒ values() { [native code] }

let objectObj = {};
result = objectObj[Symbol.iterator];
console.log(result);                    // undefined
