function Person(name) {
    this.name = name;
}

let foo = new Person('foo');

Person.prototype.sayHello = function(){
    console.log('Hello');
}

focus.prototype.sayHello();