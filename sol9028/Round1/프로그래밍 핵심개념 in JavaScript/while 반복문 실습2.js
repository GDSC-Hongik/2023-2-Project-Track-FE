const N = 180;
// 여기에 코드를 작성하세요
let i = 1;
let count = 0;

while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count++;
  }
  i += 1;
}

console.log(`180의 약수는 총 ${count}개입니다.`);