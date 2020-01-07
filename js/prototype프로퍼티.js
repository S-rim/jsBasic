function Person(name) {
    this.name= name;
}

var foo = new Person('foo');

console.dir(Person);
console.dir(foo);

// 모든 객체는 자신을 생성한 함수의 prototype 프로퍼티가 가리키는 
// 프로토타입 객체를 자신의 부모 객체로 설정하는 
//[[prototype]](=__proto__)
// 링크로 연결한다.

// 결국 객체를 생성하는 것을 생성자 함수의 역할이지만, 생성된 객체의 
// 실제 부모 역할을 하는 것은 생성자 함수가 아닌 생성자의
// prototype 프로퍼티가 가리키는 프로토타입 객체이다.

// Person() 생성자 함수의 prototype 프로퍼티와 foo 객체의 
//__proto__프로퍼티가 같은 객체를 가리키고 있다.