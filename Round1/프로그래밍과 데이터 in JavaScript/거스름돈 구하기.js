function calculateChange(payment, cost) {
    // 여기에 코드를 작성하세요
    let change=payment-cost;
    const count50=(change-(change%50000))/50000;
    change=change-50000*count50;
    
    const count10=(change-(change%10000))/10000;
    change=change-10000*count10;
    
    const count5=(change-(change%5000))/5000;
    change=change-5000*count5;
    
    const count1=(change-(change%1000))/1000;
    change=change-1000*count1;
    
    console.log(`50000원 지폐: ${count50}장`);
    console.log(`10000원 지폐: ${count10}장`);
    console.log(`5000원 지폐: ${count5}장`);
    console.log(`1000원 지폐: ${count1}장`);
  }
  
  // 테스트 코드
  calculateChange(100000, 33000);
  console.log('');
  calculateChange(500000, 378000);