// 새 직원 정보는 원하는 대로 작성하세요
const newMember = {
    name: 'GDSC',
    email: 'gdsc.hongik@gmail.com',
      department: 'DevRel'
  };
  
  
  fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember)// 여기에 코드를 작성하세요
  })
    .then(() => {
      fetch('https://learn.codeit.kr/api/members')
        .then((response) => response.text())
        .then((result) => {
          const members = JSON.parse(result)// 여기에 코드를 작성하세요
          console.log(members[members.length - 1]);
        });
    });