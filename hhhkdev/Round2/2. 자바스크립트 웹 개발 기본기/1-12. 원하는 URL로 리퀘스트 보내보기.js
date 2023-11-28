fetch("https://workey.codeit.kr/ratings")
  .then((Response) => Response.text())
  .then((Result) => {console.log(Result); })