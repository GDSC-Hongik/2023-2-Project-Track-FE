function factorial(n) {
  let result = 1;

  // 여기에 코드를 작성해 주세요.
  if (n === 1 || n === 0) {
    result = result * 1;
  } else {
    result = factorial(n - 1) * n;
  }

  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));
