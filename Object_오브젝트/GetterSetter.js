'use strict';

// ES6 Getter
let obj = {
    value : 123,
    get getValue() {
        return this.value;
    }
};
console.log(obj.getValue);


// ES6 Setter
obj = {
    set setValue(value) {
        this.value = value;
    }
},
obj.setValue = 123;
console.log(obj.value);