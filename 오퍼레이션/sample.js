// 오퍼레이션 : 문자열 조합으로 프로퍼티의 이름으로 사용하는것

// 조합하려는 이름을 [ ] 안에 작성하는것이 규칙이다
let item = {
    ["one" + "two"] : 12
};
console.log(item.onetwo);   // 12

item = "tennis";
let sports = {
    [item] : 1,
    [item + 'Game'] : '하북이',
    [item + 'Method']() {
        return this[item];
    }
};
console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod());

