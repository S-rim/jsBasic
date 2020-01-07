let let1 = 1;
let let2 = 2;
console.log(let1);
console.log(let2);

// 코드를 실행하면 먼저 전역 실행 컨텍스트가 생성되고 변수 객체가 만들어짐.
// 현재 전역 실행 컨텍스트 단 하나만 실행되고 있어 참조할 상위 컨텍스트가 없다.
// 자신이 최상위에 위치하는 변수 객체이다.
// 이 변수 객체의 스코프 체인은 자기 자신만을 가진다.

// 각각의 함수는 [[scope]] 프로퍼티로 자신이 생성된 실행 컨텍스트의
// 스코프 체인을 참조한다.
// 함수가 실행되는 순간 실행 컨텍스트가 만들어지고,
// 이 실행 컨텍스트는 실행된 함수의 [[scope]] 프로퍼티를 기반으로 
// 새로운 스코프체인을 만든다.

let let1 = 1;
let let2 = 2;

function func(){
    let let1 = 10;
    let let2 = 20;
    console.log(let1);
    console.log(let2);
}

func();
console.log(let1);
console.log(let2);

// 변수객체가 생성될 때 , 그 함수 객체의 [[scope]]는 현재 실행되는
// 컨텍스트의 변수 객체에 있는 [[scope]]를 그대로 가진다.
// 변수 객체가 실행되면서 생성된 실행 컨텏트는 자신이 사용할 스코프 체인에
// 현재 실행되는 함수 객체의 [[scope]]프로퍼티를 복사하고,
// 새롭게 생성된 변수 객체를 해당 체인의 제일 앞에 복사한다.
// 스코프 체인 = 현재 실행중인 컨텍스트의 변수 객체 + 상위 컨텍스트의 스코프체인

var value = "value1";
function printValue(){
    return value;
}

function printFunc(func){
    var value = "value2";
    console.log(func());
}

printFunc(printValue);