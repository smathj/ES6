// 파라미터가 Nan이면 true , 아니면 false
// isNan();

// 1. Nan === Nan
// 2. 글로벌 오브젝트의 isNan()
// 3. Number.isNan()

// true, true
console.log("1:", Number.isNaN(NaN), isNaN(NaN));

// false, true
console.log("2:", Number.isNaN("NaN"), isNaN("NaN"));

// false, true
console.log("3:", Number.isNaN("ABC"), isNaN("ABC"));

// false, true
console.log("4:", Number.isNaN(undefined), isNaN(undefined));

// false, true
console.log("5:", Number.isNaN({}), isNaN({}));

// true, true
console.log("6:", Number.isNaN(Number.NaN), isNaN(Number.NaN));

// true, true
console.log("7:", Number.isNaN(0 / 0), isNaN(0 / 0));

// false, false
console.log("8:", Number.isNaN(true), isNaN(true));

// false, false
console.log("9:", Number.isNaN(null), isNaN(null));

// false, false
console.log("A:", Number.isNaN(""), isNaN(""));