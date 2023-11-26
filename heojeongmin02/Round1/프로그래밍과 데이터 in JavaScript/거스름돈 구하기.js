function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let money50000 = 0;
  let money10000 = 0;
  let money5000 = 0;
  let money1000 = 0;

  let change = payment - cost;

  while (change >= 50000) {
    money50000++;
    change -= 50000;
  }
  while (change >= 10000) {
    money10000++;
    change -= 10000;
  }
  while (change >= 5000) {
    money5000++;
    change -= 5000;
  }
  while (change >= 1000) {
    money1000++;
    change -= 1000;
  }
  console.log(`50000원 지폐: ${money50000}장`);
  console.log(`10000원 지폐: ${money10000}장`);
  console.log(`5000원 지폐: ${money5000}장`);
  console.log(`1000원 지폐: ${money1000}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);
