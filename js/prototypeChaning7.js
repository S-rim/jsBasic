function Person(name){
    this.name = name;
}

Person.prototype.country = 'korea';

let foo = new Person('foo');
let bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';

console.log(foo.country);
console.log(bar.country);