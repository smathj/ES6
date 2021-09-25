// for - of 로 Object 열거
let sports = {
    soccer : '축구',
    baseball : '야구'
};

let keyList = Object.keys(sports);
for(var key of keyList) {
    console.log(key, sports[key]);
}


// 거듭제곱 연산자 ES7
console.log(3**2); // ES7
console.log(3**3); // ES7
console.log(Math.pow(3,3));