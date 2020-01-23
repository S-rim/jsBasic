# Class 정의

Class도 함수처럼 표현식과 선언문 두 가지 방법을 제공한다.

하지만 함수와 클래스는 **호이스팅**에 차이가 있다.
함수는 **가능**하지만 클래스는 **불가능**하다. 

### Class 선언

`class` 를 사용한다.

    class Seorim {
        constructor(name, age)
        {
            this.name = name;
            this.age = age;
        }
    }

### Class 표현식

식 안에 `class` 넣기

        let Seorim = class {
            constructor(name, age)
            {
                this.name = name;
                this.age = age;
            }
        };
        
        console.log(Seorim.name);
        // "Seorim"

        let Seorim2 = class Seorim {
            constructor(name, age)
            {
                this.name = name;
                this.age = age;
            }
        };

        console.log(Seorim2.name);
        // "Seorim


# Class body 와 method 정의

Class body는 중괄호로 묶여 있는 안쪽 부분이다. 이 안에서 method나 constructor같은 class members를 정의한다.

### constructor

생성자. 메소드로, `class`로 생성된 객체를 생성하고 초기화 한다. 클래스 안에 한 개만 존재할 수 있다. 여러 개면 에러 발생.

### static

클래스를 위한 정적 메소드. 클래스의 인스턴스화 없이 호출된다. 


    class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
    }

    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);
    p1.distance;  //undefined
    p2.distance;  //undefined

    console.log(Point.distance(p1, p2)); 
    // 7.0710678118654755


정적 메소드나 프로토타입 메소드가 **this 값 없이 호출**될 때, this 값은 메소드 안에서 **undefined**가 된다.


    class Rectangle {
    constructor(height, width) {    
        this.height = height;
        this.width = width;
    }
    }

**인스턴스 속성**은 반드시 **클래스 메서드 내**에 정의하기