// Logical operators(And, Or, Not)

const user = {
  isLoggedIn: true,
  role: "user", // guest, admin, user
};

if (user.isLoggedIn && user.role === "admin") {
  console.log("✅접근 가능");
} else {
  console.log("❎접근 불가");
}

// 일반 페이지 접근 로직
if (user.isLoggedIn || user.role === "admin") {
  console.log("✅일반 페이지 접근 가능");
} else {
  console.log("❎일반 페이지 접근 불가");
}

if (!user.isLoggedIn) {
  console.log("로그인해주세요");
}

// 구조분해 할당
const ingredients = ["kimchi", "mushroom", "egg", "cabbage"];

const [first, second, third] = ingredients;
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);
console.log("🚀 ~ third:", third);

const todoItem = {
  todo: "React 학습하기",
  isComplete: false,
};

const { todo, isComplete } = todoItem;
console.log("🚀 ~ todo:", todo);
console.log("🚀 ~ isComplete:", isComplete);

// spread syntax
const copyIngredients = [...ingredients, "tomato"];
console.log("🚀 ~ copyIngredients:", copyIngredients);

const copyTodoItem = {
  ...todoItem,
  description: "React 공부할거에요", // 새로운 key의 value는 추가
  isComplete: true, // 기존에 있는 key 의 value는 수정
};
console.log("🚀 ~ copyTodoItem:", copyTodoItem);
