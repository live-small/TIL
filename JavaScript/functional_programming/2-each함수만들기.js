// Filter, Map에서 반복적으로 사용되는 for문 -> Each함수에 위임

const Users = [
    { name: "KIM", age: 25 },
    { name: "KI", age: 36 },
    { name: "KM", age: 30 },
    { name: "MIU", age: 21 },
];

function Each(list, iter) {
    for (const item of list) {
        iter(item);
    }
    return list;
}

function Filter(list, predi) {
    const newList = [];
    Each(list, item => {
        if (predi(item)) {
            newList.push(item);
        }
    });
    return newList;
}

console.log(Filter(Users, user => user.age >= 30));
console.log(Filter([1, 2, 3, 4], num => num % 2));

function Map(list, mapper) {
    const newList = [];
    Each(list, item => newList.push(mapper(item)));
    return newList;
}

console.log(Map(Users, user => user.name));
console.log(Map([1, 2, 3], num => num * 2));

// 실제 활용
console.log(
    Map(
        Filter(Users, user => user.age >= 30),
        user => user.name
    )
);
