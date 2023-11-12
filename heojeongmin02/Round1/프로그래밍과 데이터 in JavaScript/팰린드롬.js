function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  length = word.length;
  for (let i = 0; i < length; i++) {
    if (word[i] === word[length - i - 1]) {
      if (i === length - 1) {
        return true;
      }
      continue;
    } else {
      return false;
    }
  }
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
