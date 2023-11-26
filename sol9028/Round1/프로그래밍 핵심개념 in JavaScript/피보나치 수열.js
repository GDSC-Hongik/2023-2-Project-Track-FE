// 여기에 코드를 작성하세요
let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  
  previous = current;
  current = current + temp;  
}

// While 사용해서 코드 짜보기
while (i <= 50) {
  console.log(current);
  let temp = previous;  
  previous = current;
  current = current + temp;  
  i++;
}
