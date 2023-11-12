let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  // 여기에 코드를 작성하세요
  let timeDiff = today - jaeSangStart;
  console.log(
    `오늘은 입사한 지 ${timeDiff / 1000 / 3600 / 24 + 1}일째 되는 날 입니다.`
  );
}

workDayCalc(jaeSangStart);
