'use strict'
// https://webcoding.tistory.com/entry/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98%EB%9E%80
// 2020-06-26 23:50
// function plus(a, b, callback) {
//     var sum = a + b;
//     callback(sum);
//   }
  
//   function prt(result) {  // 콜백 함수로 사용할 함수 정의
//     console.log(result);
//   }                 
  
//   plus(1, 2, prt);
function plus(a, b, callback) {
    var sum = a + b;
    callback(a,b,sum, '합계');
}
  
  function prt(x, y, result, msg) {  // 콜백 함수로 사용할 함수 정의
    console.log(msg,`${x} + ${y} = ${result}`);
  }                 
  
plus(5, 7, (x, y, result, msg) => { console.log(msg,`${x} + ${y} = ${result}`);});
plus(5, 7, function(x, y, result, msg) { console.log(msg,`${x} + ${y} = ${result}`);});
plus(5, 7, function prt(x, y, result, msg) { console.log(msg,`${x} + ${y} = ${result}`);});
prt(3,5,3+5,'결과');

function multi(callback) {
    // setTimeout((message, x) => callback('방가!!','정미'), 2000);
    setTimeout(() => callback('방가!!','정미'), 2000);
}

multi((msg, val) => {console.log(val, msg)});