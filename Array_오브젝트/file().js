'use strict';

let one = [1,2,3];
console.log(one.fill(7));

let two = [1,2,3,4,5];
console.log(two.fill(7,1));
//           0 1 2 3 4
let three = [1,2,3,4,5];
console.log(three.fill(7,1,3));