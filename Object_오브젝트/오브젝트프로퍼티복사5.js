'use strict';

let count = {
    current : 1,
    get getCount() {
        return ++this.current;
    }
};
let mergeObj = {};
Object.assign(mergeObj, count); // getter은 복사하지않고 호출한다
console.log(mergeObj);          // { current: 1, getCount: 2 }
console.log(Object.getOwnPropertyDescriptors(mergeObj)); // getter가 없다 [확인]

// getter는 함수로서 복사되지않고 호출된 값으로서 복사된다.