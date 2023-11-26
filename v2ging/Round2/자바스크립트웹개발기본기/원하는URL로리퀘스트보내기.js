//여기에 코드를 작성하세요

fetch("https://workey.codeit.kr/ratings")
  .then((response) => response.text())
  .then((result) => {
    return console.log(result);
  });
