// 디스트럭처링(분할 할당)과 프로퍼티 이름 조합(오퍼레이션) 

let one = 'sports';
let { [one] : value } = { sports : '농구'};
console.log(value);     // 농구

