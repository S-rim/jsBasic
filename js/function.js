// function seorim(x,y)
// {
//     return x+y;
// }
// console.log(seorim(3,4));

// let add = function(x,y){
//     return x+y;
// };

// let plus = add;

// console.log(add(3,4));
// console.log(plus(5,6));

let add = function sum(x,y){
    return x+y;
};

console.log(add(3,4));
console.log(add(1,2));

let f = function f(n){
    if(n<=1) return 1;
    else return n*f(n-1);
};

console.log(f(3));
console.log(f(3));