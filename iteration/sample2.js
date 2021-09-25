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

let arrayObj = [1,2];
let iteratorObj = arrayObj[Symbol.iterator](); 
// 이터레이터 오브젝트를 생성하여 리턴
// 물론 이터레이터블 해야함

console.log(arrayObj);
console.log("1 : ", typeof iteratorObj);

console.log("2 : ",  iteratorObj.next());   // value 1
console.log("3 : ",  iteratorObj.next());   // value 2
console.log("4 : ",  iteratorObj.next());   // value undefined



// let arrayObj = { 'a' : '에이', 'b' : '비'};
// let iteratorObj = arrayObj[Symbol.iterator](); 
// // 이터레이터 오브젝트를 생성하여 리턴
// // 물론 이터레이터블 해야함

// console.log(arrayObj);
// console.log("1 : ", typeof iteratorObj);

// console.log("2 : ",  iteratorObj.next());   // value 1
// console.log("3 : ",  iteratorObj.next());   // value 2
// console.log("4 : ",  iteratorObj.next());   // value undefined

