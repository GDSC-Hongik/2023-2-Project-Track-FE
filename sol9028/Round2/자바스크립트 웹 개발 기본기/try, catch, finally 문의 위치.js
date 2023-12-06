//fetch 함수 , response.text 에 await 붙여줌
//fuction 앞에 async 붙이기
async function showQuiz() {
try {
    const response = await fetch('https://learn.codeit.kr/api/quiz');
    const test = await response.json();
    const yourAnswer = prompt(test.quiz);
    if (yourAnswer.toLowerCase() === test.answer) {
      alert(`Good Job, ${test.explanation} => Let\'s learn more with Codeit!`);
    } else {
      throw new Error('wrong');
    }
  } catch (error) {
    if (error.message === 'wrong') {
      alert('You need to learn JS with Codeit!');
    } else {
      alert('Error');
    }
  } finally{
    window.open('https://codeit.kr', '_blank');
  }
}

showQuiz()
