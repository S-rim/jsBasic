// function outerFunc(){
//     var x = 10;
//     var innerFunx = function(){console.log(x);
//     }
//     return innerFunx;
// }

// var inner = outerFunc();
// inner();

function outerFunc(arg1, arg2)
{
    let local = 8;
    function innerFunx(innerArg){
        console.log((arg1 + arg2) + (innerArg + local));
    }
    return innerFunc;
}
let exam1 = outerFunc(2,4);

exam1(2);