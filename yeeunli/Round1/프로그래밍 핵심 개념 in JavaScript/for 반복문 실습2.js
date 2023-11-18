function printTriangle(height) {
	// 여기에 코드를 작성하세요
	result = '';
	for (let i = 0; i<height; i++) {
	  result += '*';
	  console.log(result);
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);