let foo={
    name:'seorim',
    age:17
};

console.log(foo.name);
delete foo.age;
console.log(foo.age);

delete foo;
console.log(foo.name);