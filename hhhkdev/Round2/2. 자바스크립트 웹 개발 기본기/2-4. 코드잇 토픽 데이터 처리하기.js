fetch('https://learn.codeit.kr/api/topics')
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result)// 여기에 코드를 작성하세요
    const beginnerLevelTopics = topics.filter((topic) => topic.difficulty === '초급');
    console.log(beginnerLevelTopics);
  });