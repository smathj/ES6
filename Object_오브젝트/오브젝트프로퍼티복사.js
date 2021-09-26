'use strict';

/*
assign() : 오브젝트 프로퍼티 복사

두번째 파라미터의 오브젝트 프로퍼티를
첫번째 파라미터의 오브젝트 끝에 복사하고

첫번째 파라미터를 반환

*/

try {
    let obj = Object.assign(null, { x : 1 });
} catch(e) {
    console.log('null 지정 불가');
}
console.log(Object.assign(123));
console.log(Object.assign(123).valueOf());

console.log(Object.assign(456,70));
console.log(Object.assign(456,70).valueOf());



console.log("-------------------------------------------------------------------");



console.log(Object.assign("ABC", { one : 1}));
console.log(Object.assign(Symbol("ABC"), { one : 1}));

try {
    let obj2 = Object.assign("ABC", "ONE");
} catch(e) {
    console.log('파라미터 모두 문자열 사용 불가');
}



console.log("-------------------------------------------------------------------");



let oneObj = {};
Object.assign(oneObj, "ABC", undefined, null);
console.log(oneObj);

let twoObj = {};
Object.assign(twoObj, { key1 : undefined, key2 : null});
console.log(twoObj);

