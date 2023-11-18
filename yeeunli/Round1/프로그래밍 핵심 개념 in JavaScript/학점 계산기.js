function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  // 여기에 코드를 작성하세요
  if (midtermScore+finalScore>=90) {
    console.log('A');
  }
  else if (midtermScore+finalScore<90 && midtermScore+finalScore>=80) {
    console.log('B');
  }
  else if (midtermScore+finalScore<80 && midtermScore+finalScore>=70) {
    console.log('C');
  }else if (midtermScore+finalScore<70 && midtermScore+finalScore>=60) {
    console.log('D');
  }else if (midtermScore+finalScore<60) {
    console.log('F');
  }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);