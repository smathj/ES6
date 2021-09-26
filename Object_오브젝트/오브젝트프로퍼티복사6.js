'use strict';

// 특정 오브젝트의 __proto__에 첨부하는 방법

// 1.
let Sports = function() {};
Sports.prototype.getCount = function() {
    return 123;
};
let protoObj = Object.setPrototypeOf({}, Sports.prototype);
console.log(protoObj.getCount());
console.log(protoObj.__proto__);    // { getCount: [Function (anonymous)] }
console.dir(protoObj);


console.log("-------------------------------------------------------------------");


// 2.
let Sports2 = function() {};
Sports2.prototype.getCount = function() {
    return 123;
}
let fnObj = Object.setPrototypeOf({}, Sports2);

console.log(fnObj.getCount);
console.log(fnObj.prototype.getCount.call(Sports2)); // this 지정