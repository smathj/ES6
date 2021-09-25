'use strict';

const obj = { language : "한글"};

try {
    obj = {};

} catch(e) {
    console.log("const 재할당 불가");
}
obj.language = "영어";
console.log(obj.language);  // 수정가능

obj.a = "asd";
console.log(obj.a);         // 동적 프로퍼티 추가 가능