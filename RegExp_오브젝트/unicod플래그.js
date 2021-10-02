'use strict';


// unicode 플래그


// u 플래그가 있어야 매치대상 문자열로 인식하지않고
// 유니코드의 포인트 값으로 인식한다

//                         ↓ 이것이 "u"인데 이를 "u 플래그" 라고 읽는다
let result = /\u{31}\u{32}/u.test("12");
console.log(result);
/*

   /       /.u.test(문자열);

*/

result = /\u{31}\u{32}/.test("12");
console.log(result);