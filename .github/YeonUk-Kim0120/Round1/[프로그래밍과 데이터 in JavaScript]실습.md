[프로그래밍과 데이터 in JavaScript]

1-4.
let myVoca = {
	// 여기에 코드를 작성하세요
	'function': '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
	dd:{ddd:2}
};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);
console.log(myVoca['dd']['ddd']);

1-6.
let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요
// 여기에 코드를 작성하세요
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요
// 여기에 코드를 작성하세요
myVoca.extend = "확장하다";
myVoca.export = "내보내다";
myVoca.import = "불러오다";
myVoca['default value'] = "기본값";

console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요
// 여기에 코드를 작성하세요

console.log(myVoca['default value']);

1-8.
let myVoca = {
  // 코드를 작성해 주세요.
  addVoca: function(name, value){
    myVoca[name] = value;
  },
  deleteVoca: function(name){
    delete myVoca[name];
    
  },
  printVoca: function(name){
    console.log(`"${name}"의 뜻은 "${myVoca[name]}"입니다.`);
    
  }

};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

1-11.
let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
	// 여기에 코드를 작성하세요
  let sum = 0;
  for (let i in scoreObject){
    sum += scoreObject[i];
  }
  if (sum >= 60) console.log(`축하합니다! 합격입니다!`);
  else console.log(`아쉽지만 불합격입니다..`);
}

passChecker(hyesoonScore);
passChecker(minsoonScore);

1-14.
let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
	// 여기에 코드를 작성하세요
	let day =((today-jaeSangStart)/1000/60/60/24)
	console.log(`오늘은 입사한 지 ${day+1}일째 되는 날 입니다.`)
}

workDayCalc(jaeSangStart);

2-2.
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// 여기에 코드를 작성하세요
for (let i in dataType){
  console.log(dataType[i]);
}

2-4.
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
for (let i = 0; i < 7; i++){
  let F = ( celsiusTemps[i] * 9 / 5 ) + 32;
  fahrenheitTemps[i] = F;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);

2-6.
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요

fruits.splice(1,1,'사과','청포도');


// fruits 배열의 첫 번째 요소를 삭제해 주세요
fruits.splice(0,1);


// ages 배열에 마지막 요소를 삭제해 주세요
ages.splice(5,1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
ages.splice(2,2,26,28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
numbers.splice(0,0,1,2,3,5,8,9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
let num = []
let a = 0;
for (let i = 0; i < 6; i++){
  if (numbers[i]%2 == 0){
    num[a] = numbers[i];
    a++;
  }
}
numbers = num;

// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);

2-11.
// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
voteCounter['이재식'] = 0;
voteCounter['이규하'] = 0;
for (let name of votes) {
  // 여기에 코드를 작성하세요
  if (name === '이재식'){
    voteCounter['이재식']++;
  }
  else if (name === '이규하'){
    voteCounter['이규하']++;
  }

}

// 후보별 득표수 출력
console.log(voteCounter);

2-13.
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
for (let players of groups){
  teams[0].push(players[0]);
  teams[1].push(players[1]);
  
}

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);

3-6.
// 여기에 코드를 작성하세요
function interestCalculator(r,v,n){
  let interest = Number((v * n * (n+1) / 2 * r / 12).toFixed(0));
  console.log(interest);
}


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);

3-9.
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 여기에 코드를 작성하세요
let ind = lyrics.indexOf('[형돈]');
let indb = lyrics.indexOf('[길]');
hyungdon = lyrics.slice(ind, indb);

// 테스트 코드
console.log(hyungdon);

3-13.
// 아래 코드중 잘못된 부분을 수정해 주세요
let espresso = ['espresso'];

let americano = [];
for(let i of espresso){
  americano.push(i);
}
americano.push('water');

let caffeLatte = [];
for(let i of espresso){
  caffeLatte.push(i);
}
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요

let caffeMocha = [];
for(let i of caffeLatte){
  caffeMocha.push(i);
}
caffeMocha.push('chocolateSyrup');

let vanillaLatte = [];
for(let i of caffeLatte){
  vanillaLatte.push(i);
}
vanillaLatte.push('vanillaSyrup');


// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);

4-1.
function factorial(n) {
  let result = 1;
	
	// 여기에 코드를 작성해 주세요.
  for (let i = 1; i<=n; i++){
    result *= i;
  }
	
  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));

4-2.
function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  n50000 = Math.floor((payment - cost)/50000);
  n10000 = Math.floor((payment - cost - n50000*50000)/10000);
  n5000 = Math.floor((payment - cost - n50000*50000 - n10000*10000)/ 5000);
  n1000 = Math.floor((payment - cost - n50000*50000 - n10000*10000 - n5000*5000)/1000);
  
  console.log(`50000원 지폐: ${n50000}장`);
  console.log(`10000원 지폐: ${n10000}장`);
  console.log(`5000원 지폐: ${n5000}장`);
  console.log(`1000원 지폐: ${n1000}장`);

}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);

4-3.
function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  let lenf = word.length; 
  let len = Math.floor(lenf/2);
  for (let i = 0; i<len; i++){
    if (word[i] !== word[lenf - i - 1]) return false;
  }
  return true;

}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));