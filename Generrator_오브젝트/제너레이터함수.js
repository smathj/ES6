'use strict';

// 함수 선언문 형태 - 제너레이터 함수

function* sports(one, two) {
    console.log("함수 블록");


    yield one + two ;



};
console.log(typeof sports);


let genObj = sports(1,2);
console.log(typeof genObj);
