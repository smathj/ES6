'use strict';

let Sports = function() {
    this.conut = 20;
};
Sports.prototype = {
    add : () => {
        this.count += 1;
    }
};

console.dir(Sports);
// console.dir(Sports.constructor);

let newSports = new Sports();
console.dir(newSports);


newSports.add();
console.log(newSports.count);
console.log(window.conut);
