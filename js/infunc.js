// function parent(){
//     let a = 100;
//     let b = 200;

//     function child(){
//         let b = 300;
//         console.log(a);
//         console.log(b);
//     }
//     child();
// }
// parent();
// child();

function parent(){
    var a = 100;
    var child = function(){
        console.log(a);
        }
        return child; //내부함수를 리턴
}
let inner = parent();
inner();
//inner()와 같은 함수를 클로저라 한다.