`Table of Keyword`

> [Date객체 이용법](#date)

#

### `date`

1. 메서드 인수 형식
   `year/month/day`
   `month day, year`

###

2. 인수

-   year : 1900년 이후의 정수
-   month : `0 ~ 11`
    -   0부터 시작함
-   day : `1 ~ 31`
    -   **1부터 시작함**
    -   getDay메서드는 요일을 의미하는 정수 반환
        -   요일은 0부터 시작함 `0 : Sunday`
-   hour, minute, second, millisecond는 0부터 시작

###

3. 메서드

-   Date 객체 -> 문자열
    -   toString : `return` 요일 month day year time...
    -   toDateString : `return` 요일 month day year
-   getFullYear, getMonth, getDate, getDay: `return` **정수형**
    -   연도, 월, 일자, 요일을 의미하는 정수값을 반환함.
        -   getDate만 1부터 시작\*\*

```javascript
/* 특정 날짜의 요일 구하기 */
// a는 month, b는 day
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const day = new Date(`2016/${a}/${b}`).getDay();
return week[day];

// week를 안써도 가능 -> 리턴값으로 요일이 포함된 메서드이용 **
const day = new Date(`2016/${a}/${b}`).toDateString();
return day.slice(0, 3).toUpperCase();
```

참고: 모던 자바스크립트 deep dive 30장
