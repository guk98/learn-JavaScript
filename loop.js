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
