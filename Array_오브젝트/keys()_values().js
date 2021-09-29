'use strict';

// Key 이터레이터 오브젝트 생성
// 키만 갖는다
let array = [10,20,30];
let iterator = array.keys();
//let iterator = [10,20,30].keys();
for ( var key of iterator ) {
    console.log(key , " : ", array[key]);
    //console.log(key , " : ", iterator[key]);
};


// value만 갖는 이터레이터 오브젝트 생성
let iterator2 =  array.values();
console.dir(iterator2);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);