'use strict';

let total = (one,two) => one+two;   // return 을 했따
let result = total(1,2);
console.log(result);

let get = value => value + 10;
result = get(20);
console.log(result);

let noParam = () => 3 + 4;
result = noParam();
console.log(result);