function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  length = Math.floor(word.length / 2);
  for (let x = 0; x < length; x++) {
    if (word[x] != word[word.length - 1 - x]) return false;
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome('racecar'));
console.log(isPalindrome('stars'));
console.log(isPalindrome('기러기'));
console.log(isPalindrome('123321'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('kayak'));
