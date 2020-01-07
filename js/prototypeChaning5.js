function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

let foo = new Person('foo');

console.log(foo.getName());

Person.prototype.name = 'person';

console.log(Person.prototype.getName());

//this는 기본적으로 자신을 호출한 객체를 가리킴