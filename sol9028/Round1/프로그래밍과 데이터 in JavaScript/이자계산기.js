function interestCalculator(r, p, t) {
  let interest = +(p * t * (t + 1) / 2 * r/ 12).toFixed();
    
  console.log(interest);
}

// 월80씩 24개월 납부
interestCalculator(0.043, 800000, 24);

// 월60씩 24개월 납부
interestCalculator(0.043, 600000, 24);
