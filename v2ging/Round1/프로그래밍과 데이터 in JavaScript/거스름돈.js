function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let real = payment - cost;
  let ohmanwon;
  let manwon;
  let ohcheonwon;
  let cheonwon;

  ohmanwon = Math.floor(real / 50000);
  real = real - 50000 * ohmanwon;

  manwon = Math.floor(real / 10000);
  real = real - 10000 * manwon;

  ohcheonwon = Math.floor(real / 5000);
  real = real - 5000 * ohcheonwon;

  cheonwon = Math.floor(real / 1000);
  real = real - 1000 * cheonwon;

  console.log(`50000원 지폐: ${ohmanwon}장`);
  console.log(`10000원 지폐: ${manwon}장`);
  console.log(`5000원 지폐: ${ohcheonwon}장`);
  console.log(`1000원 지폐: ${cheonwon}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);
