function checkSpy(team) {
  // 여기에 코드를 작성하세요
  const result = team.members.some((member) => member !== '스파이');
  let message = '';

  if (result) {
    message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
  } else {
    message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;
  }

  console.log(message);
}
