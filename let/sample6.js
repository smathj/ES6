'use strict';

// try의 {}블럭도 스코프를 갖는다 , catch의 {}는 스코프를 갖지않는다


let sports = '축구';
try {
    let sports = '농구';
    console.log(sports);
} catch(e) {}
console.log(sports);