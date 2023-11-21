function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  const C50 = (change - (change % 50000)) / 50000;
  change = change - 50000 * C50;

  const C10 = (change - (change % 10000)) / 10000;
  change = change - 10000 * C10;

  const C5 = (change - (change % 5000)) / 5000;
  change = change - 5000 * C5;

  const C1 = (change - (change % 1000)) / 1000;
  change = change - 1000 * C1;

  console.log(`50000원 지폐: ${C50}장`);
  console.log(`10000원 지폐: ${C10}장`);
  console.log(`5000원 지폐: ${C5}장`);
  console.log(`1000원 지폐: ${C1}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);