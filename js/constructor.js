function Func(){
    return true;
}

console.dir(Func.prototype);
console.dir(Func.prototype.constructor);

//프로토타입프로퍼티는 함수가 생성될 때 만들어지며
//단지 constructor 프로퍼티 하나만 있는 객체를 가리킨다.
//constructor 프로퍼티는 자신과 연결된 함수를 가리킨다.