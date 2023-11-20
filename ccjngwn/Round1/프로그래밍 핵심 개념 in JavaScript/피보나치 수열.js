// 여기에 코드를 작성하세요
let count = 2;
let num1 = 1;
let num2 = 1;
console.log(num1);
console.log(num2);
while (count < 50) {
  sum = num1 + num2;
  console.log(sum);
  num1 = num2;
  num2 = sum;
  count++;
}
