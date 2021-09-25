// 오브젝트 분할 할당

let { one, two } = { one : 1, nice : 9};
console.log(one, two);

let three, four;
({ three, four } = {three : 3, four : 4});
console.log(three, four);