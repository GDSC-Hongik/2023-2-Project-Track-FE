function first() {
    let message = "코드잇"; 
    return message;
}


function second() {
    let message = "codeit";
    console.log(message);
}

function third() {
    let message = undefined;
    return console.log(message);
}


// 테스트 코드
console.log(first());
second();
console.log(third());