function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
	let grade;
	if (totalScore >= 90) {grade='A'}
	else if (totalScore >= 80) {grade='B'}
	else if (totalScore >= 70) {grade='C'}
	else if (totalScore >= 60) {grade='D'}
	else {grade='F'}
	console.log(grade);
  // 여기에 코드를 작성하세요
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);