'use strict';

let gen = function* (value) {
                value = value + 10;
                yield ++value;              // (1)  , 12
                value = value + 7;          //        19
                yield ++value;              // (2)
          };
let genObj = gen(1);

console.log(genObj.next());     // 12
console.log(genObj.next());     // 20
console.log(genObj.next());     // { value: undefined, done: true }
                                //  더이상 없음
