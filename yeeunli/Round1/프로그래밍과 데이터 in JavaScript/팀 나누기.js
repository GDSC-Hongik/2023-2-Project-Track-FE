let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성하세요
for (let i=0; i<groups.length; i++) {
  for (let k=0; k<groups[i].length; k++) {
    teams[k][i]=groups[i][k];
  }
}
// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);