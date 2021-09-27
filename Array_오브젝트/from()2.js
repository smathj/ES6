let arrayLike = {
    0 : 10,
    1 : 30,
    length : 2
};

let values = Array.from(arrayLike, function(value) {
    return value + this.bonus;
}, { bonus : 100 }); // this는 보너스가 있는 객체로 지정

console.log(values);
