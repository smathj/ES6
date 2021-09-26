'use strict';

let Sports = function() {};
Sports.prototype.get = function() {};
let sportsObj = new Sports();

//__proto__ 에 set()를 추가하더라도 prototype에 추가된다
sportsObj.__proto__["set"] = function(){};
sportsObj.set();
let result = Sports.prototype.set;  // 추가됫다는 증거, 서로 공유한다..
console.log(result);