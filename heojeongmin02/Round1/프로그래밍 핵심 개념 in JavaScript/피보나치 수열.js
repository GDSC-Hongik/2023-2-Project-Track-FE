// 여기에 코드를 작성하세요
// base
lastlast = 1;
last = 1;

for (i = 1; i <= 50; i++) {
  if (i === 1 || i === 2) {
    console.log(1);
    continue;
  }
  var present = lastlast + last;
  console.log(lastlast + last);
  lastlast = last;
  last = present;
}
