'use strict';

let Sports = function() {
    this.member = 11;
};
Sports.prototype.getMember = function() {};
let sportsObj = new Sports();
console.log(sportsObj.__proto__ === Sports.prototype); // true