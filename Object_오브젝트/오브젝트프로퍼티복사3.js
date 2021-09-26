'use strict';

// assing() 고려사항
let oneObj = {
    one : 1
};

let twoObj = {
    two : 2
};

let mergeObj = Object.assign(oneObj, twoObj); // oneObj와 mergeObj는 연동되어있다

console.log(Object.is(oneObj, mergeObj));

mergeObj.one = 456;
console.log(Object.is(oneObj, mergeObj));     // 연동 확인
console.log(oneObj.one);                      // 456
console.log(mergeObj.one);                    // 456