`Table of Keyword`

> [this를 정리하자](#this)  
> [arrow function이 필요한 이유](#ES6-arrow-function)

#

### `ES6-arrow function`

#### arrow function이 필요한 이유

바로, 동적으로 결정되는 `this`의 문제점을 해결할 수 있기 때문이다.

어떻게 ? arrow function에서 this는 `lexical this`로 작동한다.

> `lexical this`  
> `현재 찾는 변수가 없을 경우, 스코프 체인을 따라 상위 스코프에서 값을 찾는다`  
> \*`lexical scope: 함수가 정의된 곳이 함수의 상위 스코프다. (=정적 스코프)`

###

#### 그럼 먼저, this에 대해 알아보자.

### `this`

한줄정리 : 자기참조변수

-   JS엔진에 의해 암묵적으로 생성되며, 함수 호출 시 함수 내부로 전달된다.
-   함수 호출방식에 따라 this 바인딩이 `동적`으로 결정된다.
    -   일반함수(중첩,콜백함수 포함)
        -   **전역객체**
    -   메서드 호출
        -   메서드를 호출한 객체
    -   생성자 함수 호출  
        - 생성자 함수가 생성한 인스턴스

생성자함수 내부 함수호출 시, 함수 내부에서 this값을 이용할 경우, 내부의 값을 참조해 잘 수행할 것이라 예상한다.  
그런데, 생성자함수 내부 함수는 일반함수로 호출되기에 this값이 `전역객체`가 된다.

**물론**  
ES6이후에 생긴, class를 쓰는 경우엔 메서드를 호출한 객체를 this로 참조하기에 문제가 없다.  
하지만, 클래스가 없을 땐 생성자 함수로 클래스를 만들었고, 사실 ES6도 내부는 함수다.

**그렇기에**
일반함수, 중첩함수를 작성할 때는 `arrow function`을 이용하는 게 좋다.

**그 이유는**
`arrow function`은 this 바인딩이 없어, 스코프 체인으로 this 변수값을 찾아 참조한다. 즉, 동적이 아니라 `정적`으로 정해진다.(=`lexical this`)

```javascript
// 상황 : 카페에 디카페인 손님이 많아져, 디카페인 카페로 바꾸기로 함. 이때, 카페메뉴판 고치는 걸 도와주자 !
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }
    add(arr) {
        return arr.map((elem) => this.prefix + elem);
    }

    /* arrow function을 이용하지 않을경우, 에러가 발생한다.  
전역객체에 this.prefix 변수가 없기때문이다. 
   add(arr) {
    return arr.map(function mapping(elem) {
      return this.prefix + elem;
    });
  } */
    // TypeError: Cannot read property 'prefix' of undefined
}

let menu = ["valila lattee", "americano"];
const renewalMenu = new Prefixer("Decaf-");
console.log(renewalMenu.add(menu));
```

참고  
모던 자바스크립트 deep dive 13, 22, 26장

#
