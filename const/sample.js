'use strict';

const SPORTS = '축구';  // 전역 변수

try {
    SPORTS = '농구';    // 외부 렉시컬환경참조로 , 전역의 SPORTS를 재할당하려했음
} catch(e) {
    console.log("const 재할당 불가");
}

