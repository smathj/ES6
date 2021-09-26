'use strict';

/*
ES6에서 Object에서 같은 키 사용 가능 (나중으로 덮어씀)
*/

let sameKey = { one : 1, one : 2};
console.log(sameKey);               // { one: 2 }


// 변수 이름으로 값 설정
let one = 1, two = 2;
let values = { one , two};
console.log(values);                // { one: 1, two: 2 }


// Object에 function 작성

// ES5
let obj = {
    getTotal : function(param) {
        return param + 123;
    }
};
console.log(obj.getTotal(400));

// ES6
obj = {
    getTotal(param) {
        return param + 123;
    }
};
console.log(obj.getTotal(400));