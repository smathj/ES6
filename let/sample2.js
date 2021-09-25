'use strict';
debugger;

// 블록 스코프
let kakaoMember = '하북';
if (kakaoMember) {
    let kakaoMember = '키북';
    console.log('블록 스코프 : ', kakaoMember);
}
console.log('글로벌 스코프 : ', kakaoMember);