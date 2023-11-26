// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
  // 여기에 코드를 작성하세요
  let Price = 0;
  switch (grade) {
    case "VIP":
      Price = VIPPrice;
      break;
    case "R":
      Price = RPrice;
      break;
    case "S":
      Price = SPrice;
      break;
    case "A":
      Price = APrice;
      break;
    default:
      console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.`);
      break;
  }
  if (Price !== 0) console.log(`${grade}석은 ${Price}만 원입니다.`);
}

// 테스트 코드
checkPrice("R");
checkPrice("VIP");
checkPrice("S");
checkPrice("A");
checkPrice("B");
