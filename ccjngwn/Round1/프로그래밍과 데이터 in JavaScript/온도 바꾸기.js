let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
for (let x = 0; x < 7; x++) {
  F = (celsiusTemps[x] * 9) / 5 + 32;
  fahrenheitTemps[x] = F;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);
