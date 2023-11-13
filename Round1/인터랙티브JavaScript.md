// 인터랙티브 js 이전까지의 강좌는 프로젝트 커리큘럼이 진행되기 몇 주 전에 코드잇에서 미리 수강했기 때문에 인터랙티브 js부터 정리를 하였습니다..
Round2부터는 모든 내용을 정리하겠습니다!


*DOM이란?
Document Object Model의 약자로, 한국어로는 문서 객체 모델을 의미. 웹 페이지에 나타나는 html 문서 전체를 객체로 표현한 것. 각 객체를 노드라는 용어로 표현하고, 태그는 요소 노드, 문자는 텍스트 노드로 구분.

요소 노드 만들기: document.createElement('태그이름')
요소 노드 꾸미기: element.textContent, element.innerHTML, ...
요소 노드 추가 혹은 이동하기: element.prepend, element.append, element.after, element.before
요소 노드 삭제하기: element.remove()

속성에 접근하기: element.getAttribute('속성')
속성 추가(수정)하기: element.setAttribute('속성', '값')
속성 제거하기: element.removeAttribute('속성')


*이벤트 관련 주요 문법 정리
querySelector()
사용이유: html의 클래스 이름 및 태그를 가지고 오고, 이후 html을 컨트롤 가능
쓰임 예시: const myDiv = document.querySelector(".test")
querySelectorAll()

addeventlistener
사용 이유: 해당 eventTarget이 어떠한 동작을 했을 시 동작을 적용하기 위해
사용 꼴: eventTarget.addEventListener('eventType', function)
-> 이벤트를실행할타겟.addEventListnener('이벤트타입', 실행할 함수)
이벤트타입 예시: click, scroll, keydown

이벤트 버블링
: 자식 요소에서 부모 요소로 이벤트가 전파되는 것을 이벤트 버블링이라고 부른다.
이벤트 위임
: 부모 요소에서 이벤트 핸들러를 등록함으로써 자식 요소들에 한번에 이벤트 등록이 된다.


*다양한 이벤트 살펴보기
[키보드 이벤트]
>KeyboardEvent.type
keydown: 키보드 버튼을 누른 순간
keypress: 키보드 버튼을 누른 순간(권장x)
keyup: 키보드 버튼을 눌렀다 뗀 순간

KeyboardEvent.key
: 이벤트가 발생한 버튼의 값

KeyboardEvent.code
: 이벤트가 발생한 버튼의 키보드에서 물리적인 위치


[input 태그]
>포커스 이벤트
focusin: 요소에 포커스가 되었을 때
focusout: 요소에 포커스가 빠져나갈 때
focus: 요소에 포커스가 되었을 때(버블링 x)
blur: 요소에 포커스가 빠져나갈 때(버블링 x)