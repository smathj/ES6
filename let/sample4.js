'use strict';

let sports = '축구', music = '재즈';    // 글로벌 스코프
function get() {                        // 함수 스코프
    let music = '클래식';
    console.log(music);
    console.log(sports); // 외부 렉시컬 환경 참조
}
get();

// 