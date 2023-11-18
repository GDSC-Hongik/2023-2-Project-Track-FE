// 여기에 코드를 작성하세요
let a = 1;
let b = 0;

for (let i = 1; i<=50; i++) {
  console.log(a);
  let x=b;
  b=a;
  a=a+x;
}