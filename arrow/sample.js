'use strict';

// ES5's Function
var es5 = function(one,two) {
    return one + two;
}

var sum = es5(1,2);
console.log(sum);

// vs

// ES6's Arrow Function
let es6 = (one, two) => {
    return one + two;
};
let result = es6(1,2);
console.log(result);