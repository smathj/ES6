'use strict';

// switct문의 {}도 하나의 스코프를 갖고 내부 case는 스코프를 갖지 않는다

var count = 1;
let sports = '축구';

switch(count) {
    case 1 :
        let sports = '농구';
        console.log(sports);
};
console.log(sports);