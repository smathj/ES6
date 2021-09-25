'use strict';

/*
Array-Like : Array는 아니지만 Array처럼 사용하는 Object 오브젝트

let values = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    length : 3
}

*/

let values = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    length : 3
}
for(var key in values) {
    console.log(key, ' : ' , values[key]);
};
for(var k= 0; k < values.length; k++) {
    console.log(values[k]);
}