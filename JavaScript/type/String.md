`Table of Keyword`

> [특정문자 외의 값 찾기](#정규표현식)  
> [정규표현식에서 변수이용할 수 있어?](#정규표현식-변수이용)

#

### 정규표현식

관련문제: [프로그래머스-뉴스클러스터링](https://programmers.co.kr/learn/courses/30/lessons/17677)  
\* [내가 푼 코드](https://github.com/live-small/problem-solving-/blob/main/programmers/Lv2/%EB%89%B4%EC%8A%A4%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81.js)

#### 영어소문자 외의 모든 값을 뽑아내려면 ? `/[^a-z]/g`

#### 처음 생각 한 것, `/[\W\d]/g`, 이건 왜 안될까?

`\w`는 영문자 + 숫자 + `_`(underscore)을 매칭함.  
`\W`는 `\w`의 부정형.

즉, underscore 을 제대로 처리하지 못함. (= `_`도 매칭되야하는데, 매칭되지 않음)  
따라서, `[\W\d_]`로 언더스코어를 넣어주면 동일하게 처리됨.

-   추가정리
    -   `\w`: **영문자, 숫자, \_(언더스코어)**
        -   `\w` === `[0-9a-zA-Z_]`
        -   숫자도 문자임, 간과하지 말기!
    -   대괄호 안은 문자집합을 담을 수 있음.
        -   문자집합에 포함된 모든 원소를 포인팅함.
        -   `/[a-z0-9]/g`: 영어소문자, 숫자를 포인팅.
    -   `/^a/g` : 대괄호 안이 아닌, 밖에 ^는 맨 앞을 의미함.
        -   a로 시작하는 값을 매칭함.
        -   대괄호 안의 ^는 부정을 의미함.

#

### 정규표현식, 변수이용

#### 정규표현식 인자로 변수를 이용할 수 있을까?

`RegExp`객체를 만들어 전달하면 가능하다.

```javascript
const days = ["Sun", "Mon", "Tue", "Wen"];
const reg = new RegExp(days[0], "g");
let sentence = "08.22(Sun) is a holiday ";
let parsingDay = sentence.match(reg); // Sun
```

1. `RegExp`객체의 인자는 찾을 변수명, 찾는 조건 2가지
2. 찾는 조건은 g(만족하는 모든 값), i(대소문자 구분 x)을 의미

#
