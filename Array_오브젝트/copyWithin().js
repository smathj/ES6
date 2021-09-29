'use strict';

let one = [1,2,3,4,5];
console.log(one.copyWithin(0,3));   // return Array 오브젝트

let two = [1,2,3,4,5];
console.log(two.copyWithin(0, 2, 4));   // return Array 오브젝트

let three = [1,2,3,4,5];
console.log(three.copyWithin(3));   // return Array 오브젝트