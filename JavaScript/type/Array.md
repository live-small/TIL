`Table of Keyword`

> [join을 활용하자](#join)  
> [문자열을 sort할때 주의](#sort)  
> [rest파라미터 vs 스프레드 문법](#rest-parameter)  
> [reduce 활용법](#reduce)

#

### join

`join`은 배열의 원소를 합쳐, 문자열로 바꿔주는 메서드다.  
원소 사이에 넣고 싶은 값을 인자로 받는다.

```javascript
console.log(["", "4seveneight", ""].join(`원소 사이`));
// output: 원소 사이4seveneight원소 사이
```

#### 이걸 어디에 활용할까?

```javascript
const numbers = ["zero", "one", "two"];
let test = "onezero3two";

for (let i = 0; i < numbers.length; i++) {
    let arr = test.split(numbers[i]);
    test = arr.join(i);
}
```

`split`로 찾는 문자를 기준으로 배열을 만들고, `join`의 인자를 통해 원하는 값으로 바꿀 수 있다.  
`split`인자가 맨 앞 혹은 맨 뒤라면, 빈 원소가 생긴다.

##### 참고

[MDN > join](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)  
[카카오채용인턴십 - 숫자문자열과 영단어 > 다른사람 풀이](https://programmers.co.kr/learn/courses/30/lessons/81301/solution_groups?language=javascript)

#

### `sort`

```javascript
result.sort((a, b) => {
    return a.job < b.job ? 1 : -1;
});
```

##### 상황설명

result의 job프로퍼티는 문자열타입이고, 이를 기준으로 정렬을 하고자 할 때,  
`return a.job < b.job`으로 `boolean`타입을 반환하면 정렬이 이루어지지 않는다.

##### 배운점

**sort함수의 return 값은 `number`타입이어야 한다.**
sort함수의 콜백함수가 음수일 때, 두 원소의 자리가 교환되기 때문이다.  
\*양수일 때는, 자리교환이 일어나지 않는다.

관련문제 : [프로그래머스-위클리 4주차](https://programmers.co.kr/learn/courses/30/lessons/84325)

#

### `rest parameter`

rest parameter : 인자목록을 받아 `array`로 반환  
스프레드 문법 : 배열을 인자목록으로 반환

```javascript
function checkRestParameter(...arg) {
    console.log(typeof arg); // object
    console.log(arg); // [1,2,3,4]
}

checkRestParameter(1, 2, 3, 4);
```

#

### `reduce`

실무에서 이용 : 특정 자료형으로 형태를 바꿀 때

```javascript
// reduce 실무활용
const query = `wbanana=10&apple=20&orange=30`;
function parse(query) {
    const queryString = query.substr(1);
    const chunks = queryString.split("&");
    return chunks
        .map((chunk) => {
            const [key, value] = chunk.split("=");
            return { key, value };
        })
        .reduce((res, item) => {
            res[item.key] = item.value;
            return res;
        }, {}); // 특정 형태로 변경할 때 **
}
```

##### 참고

책 - do it react
