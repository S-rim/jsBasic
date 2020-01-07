let foo = {
    name : 'seorim',
    major : 'front'
};

console.log(foo.name);
console.log(foo.major)
console.log(foo.age);

foo.major = 'end';
console.log(foo.major);
console.log(foo['major']);

foo.gender = 'female';
console.log(foo.gender);

foo['full_name'] = 'foo bar';
console.log(foo.full_name);
console.log(foo['full_name']);