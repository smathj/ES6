'use strict';

let gen = function* (param) {
            let one = param + 1;
            yield one;
            var two = 2;
            yield one + two;
          };
let genObj = gen(10);

console.log(genObj.next());     // 11
console.log(genObj.next());     // 13
console.log(genObj.next());     // { value: undefined, done: true }
                                //  더이상 없음
