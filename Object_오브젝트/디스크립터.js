'use strict';

// 디스크립터 = 데이터 디스크립터 + 엑세스 디스크립터 + 공통

//  엑세스 디스크립터
// get(getter), set(setter)
var obj = {};
Object.defineProperty(obj,'book',{
    get : function() {
        return '책';
    }
});
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj.book);


var obj2 = {};
Object.defineProperty(obj2, 'item', {
    set : function(param) {
        this.sports = param;
    }
});
console.log(Object.getOwnPropertyDescriptors(obj2));
console.log(obj2.item = '축구');
console.log(obj2.sports)           // 축구


