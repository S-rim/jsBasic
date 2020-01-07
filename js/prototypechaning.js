var myObject = {
    name:'foo',
    sayName: function() {
        console.log('My name is '+ this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();

// hasOwnProperty()메서드: 이 메서드를 호출한 객체에 인자로 넘긴 문자열
// 이름의 프로퍼티나 메서드가 있는지 체크하는 자바스크립트 표준 API함수.hasOwnProperty

// 객체 리터럴 방식으로 생성된 객체는 내장 Object()라는 
// 내장 생성자 함수로 생성됨. 생성자 함수 Object()는 
// 자신의 부모 객체로서 Object.prototype을 갖는다.

// 특정 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 프로퍼티가
// 존재하지 않는다면 __([[prototype]])링크를 따라서 자신의 
//부모 객체인 prototype객체의 프로퍼티를 조사한다.
// 만약 자신의 prototype객체에 프로퍼티가 존재한다면 
//이 프로퍼티를 사용한다.
// 이를 프로토타입 체이닝이라 한다.