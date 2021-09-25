'use strict';

// var , let 의 호이스팅 차이
// let은 호이스팅 되지 않는다

console.log(sports);
var sports = '스포츠';

console.log(music); // 에러 발생 ( 변수를 인식하지 못함 , TDZ)
let music = '음악'

/*
[크롬 에러]
sample8.js:9 Uncaught ReferenceError: Cannot access 'music' before initialization
    at sample8.js:9

    초기화 전에는 접근할수 없다
*/