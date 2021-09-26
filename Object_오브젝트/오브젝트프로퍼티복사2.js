'use strict';

// assign() 필요성 ( ES6 )

// 1. 같은 메모리를 참조하므로 연동된다
let sports = {
    event : '축구',
    player : 11
};
let dup = sports;

sports.player = 55;
console.log(dup.player);

dup.event = '농구';
console.log(sports.event);


console.log("-------------------------------------------------------------------");


// 2. ES5 방법 : for-in
let sports2 = {
    event : '축구',
    player : 11
};
let dup2 = {};

for(var key in sports2) {
    dup2[key] = sports2[key];
}

sports2.player = 3;
console.log(dup2.player);           // 11


console.log("-------------------------------------------------------------------");


// 3. ES6 방법 : assgin()으로 복사하면 연동되지 않는다
let sports3 = {
    event : '축구',
    player : 11
};
let dup3 = Object.assign({}, sports3);
console.log(dup3.player);           // 11

dup3.player = 33;
console.log(sports3.player);        // 11
console.log(dup3.player);           // 33

sports3.event = '수영';
console.log(sports3.event);         // 수영
console.log(dup3.event);            // 축구
