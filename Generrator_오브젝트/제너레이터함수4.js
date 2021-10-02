'use strict';

function* sports(one) {
    let two = yield one;            // 1
    let param = yield two + one;    // 2
    yield param + one;              // 3
}
let generatorObj = sports(10);
// 제너레이터 함수 호출, 제너레이터 오브젝트 리턴받음

console.log(generatorObj.next());   // 1 실행
console.log(generatorObj.next());   // 2 실행
console.log(generatorObj.next(20)); // 3 실행

console.log(generatorObj.next());   // { value: undefined, done: true }
                                    //  더이상 없음
