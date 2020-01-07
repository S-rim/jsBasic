function Person(name){
    this.name = name;
}

console.log(Person.prototype.constructor);

let foo = new Person('foo');
console.log(foo.country);

Person.prototype = {
    country : 'korea',
};
console.log(Person.prototype.constructor);

let bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);

//생성자 함수의 프로토타입 객체가 변경되면, 변경된 시점 이후에 생성된
// 객체들은 변경된 프로토타입 객체로 [[prototype]] 링크를 연결한다.
// 반면 이전에 생성된 객체들은 기존 프로토타입 객체로의 
//[[prototype]]링크를 그대로 유지한다.