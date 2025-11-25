console.log("hello world");

// 변수

const milkCaramel = "빨간펜";
let youtube = "후츠릿";
youtube = "channel";
console.log("🚀 ~ youtube:", youtube);

console.log("milk caramel", milkCaramel);

const age = 28;
console.log("🚀 ~ age:", age, typeof age);

const isComing = true;
console.log("🚀 ~ isComing:", isComing, typeof isComing);

function sayHello(username, usermbti) {
  // console.log("반갑습니다." + username + "님" + "mbti는" + usermbti + "이시군요");

  // using backtick
  console.log(`반갑습니다. ${username}님 mbti는 ${usermbti} 이시군요`);
}

const data = "jiuk";
const mbti = "INTP";
sayHello(data, mbti);
// sayHello();
// sayHello();

// return

const num1 = 1;
const num2 = 2;
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(num1, num2));

// 화살표 함수
const sum = (a, b) => a + b;

console.log(sum(10, 20));

const toUpper = (string) => string.toUpperCase();

const resultString = toUpper("chutzrit");
console.log("🚀 ~ resultString:", resultString);
