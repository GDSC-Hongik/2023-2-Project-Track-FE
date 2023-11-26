let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
for (let k in celsiusTemps) {
  let f;
  let realK = celsiusTemps[k];
  f = (realK * 9) / 5 + 32;
  fahrenheitTemps[k] = f;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);
