fetch("https://workey.codeit.kr/ratings")
  .then((response) => response.text())
  .then((result) => console.log(result));
