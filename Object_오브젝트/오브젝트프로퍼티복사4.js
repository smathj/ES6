'use strict';

// Object.assgin()으로 다수의 프로퍼티 복사
let obj = { one : 1 };
Object.assign(obj, { two : 2 }, { two : 3 }, { four : 4 });

for(var pty in obj) {
    console.log(pty,obj[pty]);
}