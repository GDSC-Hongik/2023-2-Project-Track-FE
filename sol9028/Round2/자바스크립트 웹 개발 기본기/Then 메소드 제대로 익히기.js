fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    // return response.json(); // <- Case(1)
    // return 10; // <- Case(2)
    // // <- Case(3)
    // throw new Error('failed'); // <- Case(4)
})
  .then((result) => {
    console.log(result);
  });

// 존재하지 않는 URL
/* fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json()) // <- Case(5)
  .then((result) => { }, (error) => { console.log(error) }); */

  //Case(1) : 콜백에서 Promise 객체를 리턴
  //Case(2) : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴
  //Case(3) : 콜백에서 아무것도 리턴하지 않음
  //Case(4) : 콜백 실행 중 에러 발생
  //Case(5) : 콜백이 실행되지 않음