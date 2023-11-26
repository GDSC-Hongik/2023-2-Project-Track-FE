const N = 180;
// 여기에 코드를 작성하세요
var i = 1;
var count = 0;

while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count++;
  }
  i++;
}

console.log(`180의 약수는 총 ${count}개입니다.`);
