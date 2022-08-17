// 참고강의) 인프런 - 자바스크립트로 알아보는 함수형 프로그래밍 (ES5), 유인동님
// https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/unit/6771?tab=curriculum

const Users = [
    { name: "KIM", age: 25 },
    { name: "KI", age: 36 },
    { name: "KM", age: 30 },
    { name: "MIU", age: 21 },
];

// 명령형 - user중 age가 30이상인 user리턴
// 1. filter
function Filter(users) {
    const newList = [];
    for (const user of users) {
        if (user.age >= 30) newList.push(user);
    }
    return newList;
}

// 함수형 -> 다형성 높음
// - 응용함수: 함수를 인자로 받아,필요한 시점에 실행함
// - 고차함수
function functionalFilter(list, predi) {
    // predi: 보조함수
    const newList = [];
    for (const elem of list) {
        if (predi(elem)) {
            newList.push(elem);
        }
    }
    return newList;
}

console.log(functionalFilter(Users, user => user.age >= 30)); // 30세 이상
console.log(functionalFilter([1, 2, 3, 4], num => num % 2)); // 홀수

// 2. mapping
function Map(users) {
    const newList = [];
    for (const user of users) {
        newList.push(user.name);
    }
    return newList;
}

// 함수형
function functionalMap(list, mapper) {
    const newList = [];
    for (const item of list) {
        newList.push(mapper(item));
        // 어떤 데이터를 push 할 것인지 mapper에 위임함
        // 인자의 데이터 형을 알 수 없음** -> 다형성 높음 -> 재사용 높음
    }
    return newList;
}

console.log(functionalMap(Users, user => user.name));
console.log(functionalMap([1, 2, 3], num => num * 2)); // [2,4,6]

// 실제 활용
console.log(
    functionalMap(
        functionalFilter(Users, user => user.age >= 30),
        user => user.name
    )
);
