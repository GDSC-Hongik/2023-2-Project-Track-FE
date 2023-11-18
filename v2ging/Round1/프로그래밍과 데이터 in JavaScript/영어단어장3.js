let myVoca = {
  // 코드를 작성해 주세요.
  addVoca: function (word, meaning) {
    myVoca[word] = meaning;
  },
  deleteVoca: function (word) {
    delete myVoca[word];
  },
  printVoca: function (word) {
    let mean = myVoca[word];
    let abc = `"${word}"의 뜻은 "${mean}"입니다.`;
    console.log(abc);
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca("parameter", "매개 변수");
myVoca.addVoca("element", "요소");
myVoca.addVoca("property", "속성");
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca("parameter");
myVoca.deleteVoca("element");
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca("property");
