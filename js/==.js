let a = 100;
let b = 100;

let objA = {value : 100};
let objB = {value : 100};
let objC = objB;

console.log(a==b);
console.log(objA==objB);
console.log(objB==objC);