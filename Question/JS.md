#### 정규표현식에서, 변수와 문자셋을 같이 쓸 수는 없는걸까

고민배경: 이전에 풀었던 [프로그래머스-후보키](https://github.com/live-small/problem-solving-/blob/main/programmers/Lv2/%ED%9B%84%EB%B3%B4%ED%82%A4.js)에서, 부분집합 함수를 수정하다가 마주한 고민

데이터베이스에서 후보키를 찾아주는 로직을 구현.  
**로직설명**
식별가능한 조합을 원소로 가지는 배열 찾아둔 상태, 최소성만 체크하면 되는 상황.  
직관적인 코드를 위해, 원소를 문자셋에 두고 정규표현식으로 매칭되는 값을 뽑아 원소랑 동일하다면 최소성 `false`
이럴경우, 식별가능한 조합 배열의 길이를 1씩 줄이기.

그러려면, 배열의 원소를 변수에 담고, 문자셋에 넣어야하는데...테스트 해보니까 작동하지 않는다.

```javascript
const arr = ["02", "012"];
for (let i in arr) {
    for (let e in arr) {
        if (i === e) {
            continue;
        }
        const reg = new RegExp(arr[e], "g");
        console.log(arr[i], arr[e], arr[i].replace(reg, ""));
        // 문자셋 안엔 변수를 넣을 수 없다.
    }
}
```

동시에 쓰는 방법은 없는걸까 ! 그럼 다른 해결로직은 뭐가있을까! 생각해보자 \*\*

#### object는 순서를 기억하지 못할까?

고민배경: 자료형 Map의 장점 중 하나는 순서를 보장해준다는 것이다. 그렇다면 object는 보장하지 않는걸까?

[MDN의 Map vs object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)의 order 부분을 아직 이해하지 못했다...차근차근 다시 읽고 두 자료구조의 차이점 정리하기 \*\*

#

#### 바닐라 js로 spa 구현하려면?

https://velog.io/@seeh_h/VanilaJS%EB%A1%9C-SPA-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
https://namhandong.tistory.com/99
https://developer.mozilla.org/ko/docs/Web/API/History/pushState
