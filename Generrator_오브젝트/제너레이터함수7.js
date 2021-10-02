'use strict';

let gen = function* (value) {
            return ++value;     // yield 없이 return 사용
          };
let genObj = gen(1);

console.log(genObj.next());     // 2
console.log(genObj.next());     // { value: undefined, done: true }
                                //  더이상 없음
