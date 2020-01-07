// 실행 컨텍스트란 "실행 가능한 코드를 형상화하고 구분하는 추상적인 개념"
// 코드가 실행되면 실행 컨텍스트가 생성되고
// 실행 컨텍스트는 스택 안에 하나씩 차곡차곡 쌓이고
// 제일 위에 위치하는 실행 컨텍스트가 현재 실행되고 있는 컨텍스트다.

// "현재 실행되는 컨텍스트에서 이 컨텍스트와 관련 없는 실행 코드가 실행되면,
// 새로운 컨텍스트가 생성되어 스택에 들어가고 제어권이 그 컨텍스트로 이동한다."

//실행 컨텍스트 스택
console.log("This is global context");

function ExContext1(){
    console.log("This is ExContext1");
}

function ExContext2(){
    ExContext1();
    console.log("This is ExContext2");
}

ExContext2();
// 전역 컨텍스트 -> ExContext2 컨텍스트 -> ExContext1
// 순으로 스택에 쌓이고(함수가 실행될 때) 반환(pop) 된다.