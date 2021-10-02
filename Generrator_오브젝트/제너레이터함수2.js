'use strict';

// 함수 표현식 형태 - 제너레이터 함수

let sports = function* (one, two) {
    console.log("함수 블록");
    yield one + two ;
};

console.dir(sports);

let genObj = sports(10,20);

console.dir(genObj);

console.log(typeof genObj);
console.log(genObj.next());