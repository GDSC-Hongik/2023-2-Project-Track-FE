// 여기에 코드를 작성하세요

let f1 = 1;
let f2 = 1;

let i = 3;
console.log(f1);
console.log(f2);
while (i < 51) {
  let f3 = f1 + f2;
  f1 = f2;
  f2 = f3;
  console.log(f3);
  i++;
}
