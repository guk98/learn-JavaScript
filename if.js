score = 59;

const pass = () => {
  console.log("합격");
};
const fail = () => {
  console.log("불합격");
};

if (score >= 60) {
  pass();
} else {
  fail();
}

//if ~ else statement
score = 70;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

score = 60;
// 삼항 연산자
// condition? value1 : value2
score > 59 ? pass() : fail();

const isCheck = "abc" === "abc";
console.log("🚀 ~ isCheck:", isCheck);

// 비교연산자 ==, ===
// - 0
// - null
// - undefined
// - ""(빈 문자열)

const userInput = "";

if (!userInput) {
  //userInput의 값이 비어있는 경우
  console.log("값을 입력해주세요");
}

// 배열
const ingredients = ["kimchi", "mushroom", "egg"];
console.log(ingredients[1]);
console.log(ingredients.length);

prep = ingredients.pop();
console.log(ingredients.length);

//객체 -> JS에는 (key:value) pair로 object가 구성
const person = {
  name: "my name",
  mbti: "my mbti",
  company: "company name",
  city: "city name",
  isMale: true,
};

console.log(person.name);
