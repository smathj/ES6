'use strict';

/*
----------------------------------------------------------------

콜백 함수에서 true를 반환하면
처리 중인 엘리먼트 값을 반환하다

----------------------------------------------------------------

Array오브젝트.find();

----------------------------------------------------------------

<파라미터>

1. 콜백함수
2. [옵션] 콜백함수가 this로 접근할 오브젝트

----------------------------------------------------------------

<리턴>

1. 배열 엘리먼트 또는 undeifned

----------------------------------------------------------------
*/

let result = [1,2,3].find((value, index, allData) => value === 2);
console.log(result);

result = [1,2,1].find(function(value, index, allData) {
    return value === 1 && value === this.key;
}, { key : 1});
console.log(result);




result = [10, 20, 30].findIndex(
    (value, index, allData) => value === 20);
  console.log(result);
  
  result = [10, 20, 30].findIndex((value, index, allData) => value === 77);
  console.log(result);
  
  result = [10, 20, 30].findIndex(function(value, index, allData){
    return value === 30 && value === this.check;
  }, {check: 30});
  console.log(result);




