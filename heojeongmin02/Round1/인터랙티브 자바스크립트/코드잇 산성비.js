const input = document.querySelector("#input");

function checker() {
  const words = document.querySelectorAll(".word");
  if (words.length === 0) {
    alert("Success!👏");
    if (confirm("retry?")) {
      window.location.reload();
    }
  }
}
function enter(e) {
  const words = document.querySelectorAll(".word");
  if (e.key === "Enter") {
    const newMessage = input.value;

    for (word of words) {
      if (word.textContent === newMessage) {
        word.remove();
        checker();
      }
    }
    input.value = "";
  }
}

// 여기에 코드를 작성하세요
input.addEventListener("keydown", enter);
