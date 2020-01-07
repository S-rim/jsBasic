let foo = function(){
    return function(){
        console.log('this function is the return value')
    };
};

let bar = foo();
bar();