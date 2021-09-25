/*
for - of 문은 이터러블 오브젝트를 반복하여 처리한다
반복하는 것은 for-in 문과 차이가 없지만
대상과 방법에 차이가 있다한다

for(variable of iterableObject) { 
    코드 
}

*/

// Array 반복
for(var value of [10,20,30]) {
    console.log(value);
}

// String 사용
for(var value2 of '하북이') {
    console.log(value2);
}

// NodeList 반복
// document.querySelectorAll() 이런것들
// let nodes = document.querySelectorAll('li');
// for (var node of nodes) {
//     console.log(node.textContent);
// };

//디스트럭처링
let values = [
    {item : '선물1', amount : {apple : 10, candy : 20}},
    {item : '선물2', amount : {apple : 30, candy : 40}}
];
for(var {item : one , amount : {apple : two , candy : five}} of values) {
    console.log(one, two, five);
}