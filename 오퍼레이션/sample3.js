// Default Value
let [ one, two, five=5] = [1,2];    // 분할 할당
console.log(five);

[one, two, five=5] = [1,2,77];
console.log(five);

let {six, seven=7} = {six : 6};
console.log(six, seven);

