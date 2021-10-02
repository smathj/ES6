'use strict';

function* sports(one) {
    yield one;
    let check = 10;
}
let genObj = sports(10);

console.log(genObj.next());
console.log(genObj.next()); // { value: undefined, done: true }
                            //  더이상 없음