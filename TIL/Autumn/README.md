## 2023년 10월 12일

# 타입스크립트

- 오픈소스로 공개되어 있어 계속 개발, 유지 보수 중 발전 가능성이 아주 크다.
- 자스를 안전하게 사용할 수 있도록 타입 관련 기능을 추가한 언어
- 자스의 확장판

자바스크립트의 한계점 ?

- 동적 타입 시스템을 사용
- 변수의 타입을 코드가 실행되는 도중에 결정
- 변수의 타입이 하나로만 고정되지 않음 / 다양한 타입 변수에 넣기 가능
- 숫자에 문자열 메소드를 사용해도 실행이됨 / 실행되면 안됨
- 오류가 발생하며 서비스가 마비

정적 타입 시스템 (Java, C)

- 변수를 선언함과 동시에 타입을 정해줘야함
- 타입 관련 오류가 있으면 실행이 안됨 / 오류를 바로 알려줌
- 미리 확인이 가능함
- 모든 변수에 일일이 변수를 작성 -> 매우 귀찮고 코드가 길어진다

타입스크립트는 동적 타입 + 정적 타입을 혼합

- 모든 변수 일일이 타입 명시하지 않아도 됨
- 초기값을 가지고 알아서 타입을 지정함
- 점진적 타입 시스템이라고 부름
- 실행 전 검사를 통해 타입 안정성을 확보함
- 타입에 문제가 있을 경우 실행 안됨

### 타입스크립트 동작 원리

사람 -> 자스 -> 컴파일 -> 바이트 코드 -> 컴퓨터
컴파일러는 작성한 코드를 AST로 변환하고, 바이트 코드로 변환한다.

타스도 컴파일을 거쳐야하는데, 독특하게 진행된다.
TS -> AST -> 타입검사 -> 성공 시 JS로 변환되고 종료
실행될 때 다시 JS -> AST -> 바이트 코드로 실행됨

---

## 2023년 10월 13일

# 컴파일러 옵션 설정

```
npm init
npm i @types/node
## 컴파일러 설치
npm i typescript -g

## 버전 확인
tsc -v

## 컴파일러+node.js 한번에 타스파일을 실행할 수 있음
npm i ts-node -g

```

타입스크립트는 컴파일러 옵션을 쉽게 설정할 수 있음.

```
tsc --init
```

```
## tsconfig.json
{
  "include": ["src"]
}
```

src 디렉토리 아래에 있는 모든 파일을 한번에 컴파일 하게함 / 컴파일 범위를 지정
-> tsc만 입력하면 알아서 src를 컴파일함

```
{
  "compilerOptions": {
    "target": "ES5"
  },
  "include": ["src"]
}
```

target : JS의 버전을 설정할 수 있음

```
# index.ts
const func = () => console.log("Hello");
```

실행 시

```
# index.js
var func = function () { return console.log("Hello"); };
```

ES5에는 화살표 함수가 없어 일반 함수표현식으로 바껴서 나오는 것을 확인할 수 있음

```
# tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext"
  },
  "include": ["src"]
}
```

ESNext : 자바스크립트 최신 버전
다시 실행하면

```
# index.js
const func = () => console.log("Hello");
```

화살표 함수로 잘 만들어짐

#### 타스를 자스로 변환하는 과정이나, type 검사 등 아주 상세한 옵션들을 설정할 때에는 컴파일러 옵션즈 안에 옵션을 설정한다.

---

# 자바스크립트 모듈 옵션

### 모듈이란 ?

- 독립적으로 존재하는 프로그램의 일부로 재사용이 가능한 것들
- 자스에서는 독립된 하나의 파일을 모듈이라고 부른다.
- 특정 정보를 담은 하나의 객체거나 특정 목적을 지닌 복수의 함수로 구성하는 경우가 많음

### 모듈 시스템?

- 모듈을 사용하는 방법

### ES 모듈 시스템

- ECMAScript의 약자 줄여서 ESM
- 가장 최근 개발된 모듈 시스템으로 리액트, 뷰와 같은 최신 프론트엔드 기술은 모두 ESM을 채택

---

```
# tsconfig.js
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "module": "CommonJS"
  },
  "include": ["src"]
}
```

CommonJS라는 옛날 모듈 옵션으로 설정

```
# hello.ts
export const hello = () => {
  console.log("hello");
};
```

```
# index.ts
import { hello } from "./hello";

hello();
```

실행하면

```
# index.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
(0, hello_1.hello)();
```

처음보는 문법의 향연 ..

```
# tsconfig.js
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "module": "ESNext"
  },
  "include": ["src"]
}
```

모듈을 최신 버전으로 변경하고 실행

```
# hello.js
export const hello = () => {
    console.log("hello");
};
```

익숙한 ESM 코드가 나타남 !

---

outDIR: 컴파일 후 생성되는 자스 파일들이 어디에 위치했으면 좋겠는지 지정

```
# tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "module": "ESNext",
    "outDir": "dist"
  },
  "include": ["src"]
}
```

실행시키면 자동으로 dist 폴더가 생성되고, 그안에 자스 파일들이 생성된다.

---

strict : 엄격한 타입 검사

```
# hello.ts에 매개변수를 추가
export const hello = (message) => {
  console.log("hello" + message);
};
```

오류가 발생하지 않다가

```
# tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true
  },
  "include": ["src"]
}
```

strict를 true로 지정하니 message 타입 에러가 발생한다.
타스는 매개변수들의 타입을 개발자가 직접 지정하도록 권장함.
-> 매개변수의 타입이 뭐가 될지 알수 없기 때문
true로 켜놔야 엄격하게 검사해서 오류 가능성을 줄일 수 있다.

---

- 타입스크립트는 파일을 전역 모듈로 취급함. 그래서 다른 파일에서 동일한 변수명을 사용하면 안된다.

### 해결방법 1

export, import 모듈 시스템을 사용하는 문법 키워드를 파일 내 한번이라도 작성하면 그 파일은 독립적인 격리된 파일로 취급된다.

### 해결방법 2

tsconfig.json에 옵션 추가

```
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "moduleDetection": "force"
  },
  "include": ["src"]
}
```

moduleDetection : force
지정하고 실행시킨 후 js 파일 결과를 보면 자동으로 export가 추가되어 있음

```
# index.js
const a = 1;
export {};
```

## 2023년 10월 14일

와이어 프레임 제작, 발표 PPT 제작