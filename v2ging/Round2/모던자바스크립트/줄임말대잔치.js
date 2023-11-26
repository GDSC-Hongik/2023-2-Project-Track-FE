function firstWords() {
  let word = "";

  // 여기에 코드를 작성하세요
  for (const words of arguments) {
    word += words.substring(0, 1);
  }
  console.log(word);
}

// 모범 답안
function firstWords1() {
  let word = "";

  // 여기에 코드를 작성하세요
  for (const arg of arguments) {
    word += arg[0];
  }
  console.log(word);
}

firstWords("나만", "없어", "고양이");
firstWords("아니", "바나나말고", "라면먹어");
firstWords("만두", "반으로", "잘라먹네", "부지런하다");
firstWords("결국", "자바스크립트가", "해피한", "지름길");
firstWords("빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색");
firstWords1("빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색");
