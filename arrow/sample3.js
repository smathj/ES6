let sports = () => { };
let result = sports();
console.log(result);

/*
{ } 을 함수 블록으로 인식하고
return문이 없기에 undefined 반환한다


*/


// let get = param => { sports : '축구'};   // undefined
let get = param => ({ sports : '축구'});
result = get();
console.log(result);