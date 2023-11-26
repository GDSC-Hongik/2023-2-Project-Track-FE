function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost;
  let bills = [50000, 10000, 5000, 1000];

  for (const bill of bills) {
    let count = Math.floor(change / bill);
    change = change % bill;

    console.log(`${bill}원 지폐: ${count}장`);
  }
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
