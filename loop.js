const ingredients = ["kimchi", "mushroom", "egg"];

// loop statement
ingredients.forEach((value, index) => {
  console.log(`${index + 1}번째 음식 : ${value}`);
});

const messages = [
  {
    username: "맛있는 쉐프",
    message: "대화를 시작해볼까요?",
  },
  {
    username: "후츠릿",
    message: "그래 너는 이름이 뭐야?",
  },
];

messages.forEach((item, index) => {
  console.log(item.message);
});

const names = ["alice", "bob", "kelly", "david"];

// apply uppercase
const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);

// return filtered array
const filteredNames = names.filter((name) => name.length >= 4);
console.log("🚀 ~ filteredNames:", filteredNames);

// find element
const findName = names.find((name) => name.length >= 4);
console.log("🚀 ~ findName:", findName);

// every, some
const someName = names.some((name) => name.length >= 4);
console.log("🚀 ~ someName:", someName);
const everyName = names.every((name) => name.length >= 4);
console.log("🚀 ~ everyName:", everyName);

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => a + b;

console.log(add(5, 3)); // 예상 결과: 8

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // 여기에 코드를 작성하세요. // 예상 결과: [2, 4, 6]
