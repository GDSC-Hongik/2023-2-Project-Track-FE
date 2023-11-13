let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  // 여기에 코드를 작성하세요
  let date =
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
  console.log(`오늘은 입사한 지 ${date}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);
