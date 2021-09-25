// for - of  vs for - in 차이
/*
-------------------------------------------------
for - of 
대상 : 이터러블 오브젝트
제외 : prototype에 연결된 프로퍼티
-------------------------------------------------
for - in
대상 : Object 오브젝트 , 열거 가능해야함
제외 : enumrable의 값이 false
-------------------------------------------------
*/

let values = [10,20,30]; // 이터러블 오브젝트
Array.prototype.music = function() {
    return '음악';
};
Object.prototype.sports = function() {
    return '스포츠';
};

console.dir(values);

for(var key in values ) {
    console.log(key, values[key]);
};
console.log("<<<for-of>>>");
for(var value of values) {
    console.log(value);
};