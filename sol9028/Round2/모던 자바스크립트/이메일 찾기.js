function findEmail() {
  const nameValue = nameInput.value;
  const phoneValue = phoneInput.value;

  // 여기에 코드를 작성해 주세요.
  const user = data.find((el) => nameValue === el.userName && phoneValue === el.phoneNumber);

  const message = user
    ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
    : '이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.';

  alert(message);
}
