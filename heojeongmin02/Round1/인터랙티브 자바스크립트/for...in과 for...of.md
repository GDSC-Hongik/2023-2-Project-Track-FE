저번주에 배웠고 파이썬에서도 사용하지만 항상 헷갈려서 엉뚱하게 사용하곤 해서 나중에라도 찾아보려고 정리해봤다.

#### 1번) for ... in 문

value가 아닌 key값에 접근한다.

```
for(let i in items) {
	items[i].addEventListener('click', updateToDo);
}
```

i에 index값이 순서대로 들어오기 때문에 i-1번째 item에 이벤트 리스너를 추가하려면 items[i]와 같이 사용해야 한다.

#### 2번) for ... of 문

value값이 순서대로 들어온다.

```
for(let item in items) {
	item.addEventListener('click', updateToDo);
}
```

item 자체에 items의 n번째 값이 들어오기 때문에 위와같이 작성하면 1번 코드와 동일하게 작동한다.
