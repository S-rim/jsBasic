# this

현재 실행 문맥

**호출자가 누구냐**

        alert(this === window) // true, 호출자는 window

        const caller = {
        f: function() {
            alert(this === window)
        },
        }
        caller.f() // false, 호출자는 caller 객체

**strict-mode**에서는 **전역 객체냐 일반 객체냐**에 따라 함수내부에 this 의 결과가 다르다

        function nonStrictMode() {
        return this
        }

        function strictMode() {
        'use strict'
        return this
        }

        console.log(nonStrictMode()) // window
        console.log(strictMode()) // undefined
        console.log(window.stricMode()) // window


### 생성자 함수에서의 this

        function NewObject(name, color) {
        this.name = name
        this.color = color
        this.isWindow = function() {
            return this === window
        }
        }

        const newObj = new NewObject('nana', 'yellow')
        console.log(newObj.name) // nana
        console.log(newObj.color) // yellow
        console.log(newObj.isWindow()) // false

        const newObj2 = new NewObject('didi', 'red')
        console.log(newObj2.name) // didi
        console.log(newObj2.color) // red
        console.log(newObj2.isWindow()) // false

this는 new를 통해 만들어진 새로운 변수.
`newobj` `newobj2`는 같은 생성자 함수로 만들어진 객체이지만 완전히 별도의 객체. 

### 객체에서의 this

    const person = {
    name: 'john',
    age: 15000,
    nickname: 'man from earth',
    getName: function() {
        return this.name
    },
    }
    console.log(person.getName()) // john

    const otherPerson = person
    otherPerson.name = 'chris'
    console.log(person.getName()) // chris
    console.log(otherPerson.getName()) // chris

왜 otherPerson.name을 chris로 설정한 뒤 person.getName() 호출하면 그 결과는 chris일까?. 그 이유는 otherPerson 은 person 의 레퍼런스 변수이므로 하나(otherPerson)를 변경하면 다른 하나(person)도 변경되기 떄문이다. 이를 피하기 위해서는 Object.assign()메서드(ES6 지원)를 이용하여 완전히 별도의 객체로 만들어야한다.

        const person = {
        name: 'john',
        age: 15000,
        nickname: 'man from earth',
        getName: function() {
            return this.name
        },
        }
        const newPerson = Object.assign({}, person)
        newPerson.name = 'chris'
        console.log(person.getName()) // john
        console.log(newPerson.getName()) // chris


### bind, arrow function

        function Family(firstName) {
        this.firstName = firstName
        const names = ['bill', 'mark', 'steve']
        names.map(function(lastName, index) {
            console.log(lastName + ' ' + this.firstName)
            console.log(this)
        })
        }
        const kims = new Family('kim')
        // bill undefined
        // window
        // mark undefined
        // window
        // steve undefined
        // window

map 메서드 - value와 index를 인자로 가지는 새로운 함수

이 map 메서드를 이용해 lastName과 this의 firstName을 같이 출력하고자 했다. 하지만 출력은 `undefind`가 나왔다. 이는 map에서 this가 실행문맥이 전역이라는 것을 뜻한다. map의 this는 `window`인 것이다.


**이를 해결하기 위해서는**

#### 1. const 지정하기

        function Family(firstName) {
        this.firstName = firstName
        const names = ['bill', 'mark', 'steve']
        const that = this
        names.map(function(value, index) {
            console.log(value + ' ' + that.firstName)
        })
        }
        const kims = new Family('kim')
        // bill kim
        // mark kim
        // steve kim


#### 2. bind 메서드 사용하기

        function Family(firstName) {
        this.firstName = firstName
        const names = ['bill', 'mark', 'steve']
        names.map(
            function(value, index) {
            console.log(value + ' ' + this.firstName)
            }.bind(this)
        )
        }
        const kims = new Family('kim')


#### 3. arrow function 사용하기

        function Family(firstName) {
        this.firstName = firstName
        const names = ['bill', 'mark', 'steve']

        names.map((value, index) => {
            console.log(value + ' ' + this.firstName)
        })
        }
        const kims = new Family('kim')

## 결론

**this**는 누가 호출했느냐에 따라 결정된다.