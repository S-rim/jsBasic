let foo = {
    name : 'seorim',
    age : 17,
    major: 'front'
};

let prop;
for(prop in foo){
    console.log(prop, foo[prop]);
}

// for(prop of foo){
//     console.log(prop);
// }