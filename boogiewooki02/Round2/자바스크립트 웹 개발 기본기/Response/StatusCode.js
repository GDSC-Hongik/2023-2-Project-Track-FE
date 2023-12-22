fetch('https://www.google.com')
  .then((response) => {
    console.log(response.status);
  });
// response status로 200을 리턴받는다.