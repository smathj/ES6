'use strict';

/*
reset 파라미터 ( 나.머.지 파라미터)
function(param, paramN, ...rest);

*/

let get = (one) => {
    console.log(one);
};
get(...[1,2,3]);                                // 1


console.log("------------------------------------------------------------------");


let get2 = (...rest) => {
    console.log(rest);                          // [1,2,3]
    console.log(Array.isArray(rest));           // true
}
get2(...[1,2,3]);


console.log("------------------------------------------------------------------");


let get3 = (one, ...rest) => {
    console.log(one);
    console.log(rest);                          // [2,3]
    console.log(Array.isArray(rest));           // true
}
get3(...[1,2,3]);
