// * 예제코드는 typescript공식문서 기반 활용

//  📘 기본
// keyof : object의 key type - string | number
type Arrayish = { [n: number]: string };
type A = keyof Arrayish; // number

// typeof : 뒤에 오는 변수의 타입
let start = "hello typescript!";
type str = typeof start;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// 함수의 리턴타입을 이용, boolean

function f() {
	return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>; // {x: number, y:number}

// TODO: infer : 타입 추론해서 조건문에 이용
// - ReturnType에서 이용
type returnType<T extends (...args: any) => any> = T extends (
	...args: any
) => infer R
	? R
	: any;
// 1) 받아오는 값은 function을 상속
// 2) T에서 추론한 타입(R)이 있으면, R : never(없음)

type MyType<T> = T extends infer R ? R : never;
type T1 = MyType<{ b: string }>; // T1 is { b: string; }
// type MyType2<T> = T extends R2 ? R2 : never; // error, R2 undeclared

// * contional type이 있는데, infer 왜 필요?
// stack overflow: https://stackoverflow.com/questions/60067100/why-is-the-infer-keyword-needed-in-typescript
// docs: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types

// in
// extends

// indexed access types
// : 이미 선언된 객체의 타입을 활용가능

const People = [
	{ name: "Alice", age: 15 },
	{ name: "Bob", age: 23 },
	{ name: "Eve", age: 38 },
];

type personMetaData = typeof People[number];

type Age = typeof People[number]["age"]; // number
type Age2 = personMetaData["age"];

// - const 선언된 값은 이용할 수 없음(let, type이용)
const key = "age";
// type age = personMetaData[key];

// Mapped types : 존재하는 타입을 다른 성질(readonly, nullable...)로 맵핑해줌
// - 선언되지 않은 프로퍼티 => [ ]로 선언
// 1) nullable
type Nullable<T> = { [P in keyof T]: T[P] | null };

// 2) 기존 타입구조만 이용 *
type OptionsFlags<Type> = {
	[Property in keyof Type]: boolean;
};
type FeatureFlags = {
	darkMode: () => void;
	newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>; // 리턴타입을 변경함

// 3) readonly, optional성질 추가/삭제 가능(-, +)
// - 추가/제거하고 싶은 성질 "앞"에 +, -
type RemoveReadonly<T> = {
	-readonly [P in keyof T]: T[P];
};
type Account = {
	readonly id: string;
	readonly password: string;
};
type MutableAccount = RemoveReadonly<Account>;

type Concrete<Type> = {
	[Property in keyof Type]-?: Type[Property];
};
// +More map type
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as

// TODO: 아래 conditional type 읽기
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

// 🥳 utility type 내부문서 읽으면서, 제네릭, 키워드에 익숙해지기

// 🥳 활용코드 : 오픈소스, 다른 사람 프로젝트에서 사용예제 찾아보기
// Promise적용 ...
