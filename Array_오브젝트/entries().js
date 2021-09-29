'use strict';

// 이터레이터 오브젝트 생성

let values = [ 10, 20, 30 ];
let iterator = values.entries();
// console.log(iterator.next());

for ( var [key,value] of iterator) {
    console.log(key, ":", value);
};
