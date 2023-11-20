[프로그래밍 핵심 개념 in JavaScript]


1-5. 문자열 실습1
console.log(`한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.`);
console.log(`아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.`);

1-6. 문자열 실습2
console.log(`영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`);

1-19. 템플릿 문자열 실습
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);  // 괄호 안에 코드를 작성하세요
}

// 테스트 코드
calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);

1-22 자료형 응용하기
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 할당
// 여기에 코드를 작성하세요
result1 = material2 + material4;
result2 = material3 * material1 + material5;
// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);

2-4. 함수 부려먹기1
function logParticipant(x){
  console.log(`${x}(이)가 대화에 참여했습니다.`);
}
// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

2-5. 함수 부려먹기2
function expressMultiplication(x, y){
  console.log(`${x} * ${y} = ${x*y}`)
}
// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

2-8. return과 console.log의 차이 실습
function expressMultiplication(x, y){
  console.log(`${x} * ${y} = ${x*y}`)
}
// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

2-9. 함수 부려먹기3
function calculateRectangleArea(x, y){
  return x * y;
}
// 테스트 코드
let area1 = calculateRectangleArea(3, 4);  // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8);  // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2);  // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);

2-11. 세트 메뉴 주문하기
function orderSetMenu(sandwich, drink = "스프라이트"){
  console.log(`주문하신 ${sandwich}, ${drink} 세트 메뉴 나왔습니다!`);
}
// 테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');

2-16. 함수 변수 복습하기
let adultTag = "삑!"; 
let teenagerTag = "삑삑!";
let errorTag = "삑삑삑!";
let transferTag = "환승입니다.";
// 아래에 tagCase파라미터를 가지는 tagNotification() 함수를 작성해 주세요
function tagNotification(tagCase){
  console.log(tagCase);
}
// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);

3-2. 롤러코스터, 탈 수 있을까?
function checkHeight(height) {
	// 여기에 코드를 작성하세요
	if (height >= 140) console.log("탑승이 가능합니다.");
	else console.log("탑승이 불가능합니다.");
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);

3-4. 학점 계산기
function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  // 여기에 코드를 작성하세요
  if (totalScore >= 90) console.log("A");
  else if (totalScore >= 80) console.log("B");
  else if (totalScore >= 70) console.log("C");
  else if (totalScore >= 60) console.log("D");
  else console.log("F");
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

3-5. 서열 정리
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성하세요
  if(myAge > yourAge){
    if (yourGender == "female") return "여동생";
    else return "남동생";
  }
  else if(myAge < yourAge){
    if (yourGender == "female") return "누나";
    else return "형";
  }
  else return "친구";
  
  
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

3-8. 등급별 티켓 가격
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
  switch(grade){
    case "R":
      console.log(`${grade}석은 ${RPrice}만 원입니다.`);
      break;
    case "VIP":
      console.log(`${grade}석은 ${VIPPrice}만 원입니다.`);
      break;
    case "S":
      console.log(`${grade}석은 ${SPrice}만 원입니다.`);
      break;
    case "A":
      console.log(`${grade}석은 ${APrice}만 원입니다.`);
      break;
    default:
      console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.");
    
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

3-11. for반복문 실습1
// 여기에 코드를 작성하세요
for (let i = 0; i<=100; i++){
  if (i%2 === 0) console.log(i);
}

3-12 for반복문 실습2
function printTriangle(height) {
	// 여기에 코드를 작성하세요
	let now = "*";
	for (let i = 1; i <= height; i++){
	  console.log(now);
	  now = now + "*";
	  
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

3-14. while 반복문 실습1
// 여기에 코드를 작성하세요
let i = 1;
while(i !== 100){
  if (i%2 !== 0) console.log(i);
  i++;
}

3-15. while반복문 실습2
const N = 180;
// 여기에 코드를 작성하세요
let i = 1;
let cnt = 0;
while(i <= N){
  if (N%i === 0) {
    console.log(i);
    cnt++
  }
  i++;
}
console.log(`${N}의 약수는 총 ${cnt}개입니다.`)

3-18. 구구단 만들기
// 여기에 코드를 작성하세요
for (let i = 1; i < 10; i++){
  for (let j = 1; j < 10; j++){
    console.log(`${i} * ${j} = ${i*j}`);
  }  
}

3-19. 피보나치 수열
// 여기에 코드를 작성하세요
let i = 1;
let j = 1;
let P;
console.log(i);
console.log(j);
for (let k = 0; k < 48; k++){
  P = i + j;
  console.log(P);
  i = j;
  j = P;
}
