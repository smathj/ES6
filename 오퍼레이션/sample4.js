// 디폴트 값 적용순서
let [one, two = one + 1, five = two + 3] = [1];
console.log(one, two, five);
// -> -> ->

// 디폴트 파라미터가 있을경우 undefined를 의도적으로 넘겨줘도 무시한다
let plus = (one,two = 2) => one + two;
console.log(plus(1));
console.log(plus(1, undefined));    // undefined 무시 ! 
console.log(plus(1,70));

// 파라미터 디스트럭처링(분할 할당)
// 디폴트 파라미터 값을 건내주었다 (1)
let getTotal = ([one,two] = [10, 20]) => one + two;
console.log(getTotal());

// 디폴트 파라미터 값을 건내주었다 (2)
let getValue = ({two : value} = { two : 20 }) => value;
console.log(getValue());