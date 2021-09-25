'use strict';

/*
Array-Like 전개 : 프로퍼티 키 값은 0 부터 1씩 증가하면서 순차적으로 작성해야함
*/

let values = { 
    10 : 'ten',
    zoo : '동물원',
    2 : 'two',
    length : 3
};

for(var k=0; k < values.length; k++) {
    console.log(values[k]);
}

// [결과]
// undefined
// undefined
// two