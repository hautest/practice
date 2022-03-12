const log = console.log;
//변수선언
const main = document.querySelector(".main");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
const input = document.querySelector("#input");
const form = document.querySelector("#form");
let todosave = [];

//빈값 입력 방지
form.addEventListener("submit", handleSubmitEvent);
function handleSubmitEvent(e) {
  e.preventDefault();
  if (input.value === "") {
    alert("리스트를 입력해주십시오");
  } else makelist();
}

function deleteListItem(event) {
  event.stopPropagation();
  const li = event.target.parentElement;
  list.removeChild(li);
  todosave = todosave.filter((toDo) => toDo.id !== parseInt(li.id));
  localStorage.setItem("todosave", JSON.stringify(todosave));
}

function check(id) {
  return function (event) {
    event.target.classList.toggle("checkText");
    todosave = todosave.map((v) => {
      if (v.id === id) {
        return { ...v, done: !v.done };
      }
      return v;
    });
    localStorage.setItem("todosave", JSON.stringify(todosave));
  };
}

function makelist() {
  //입력값을 로컬스토리지에 저장
  const todoobject = {
    text: input.value,
    id: Math.floor(Math.random() * 1000000) + 1,
    done: false,
  };
  todosave.push(todoobject || savelist[i]);
  localStorage.setItem("todosave", JSON.stringify(todosave));
  addListItem(todoobject);
  input.value = "";
}

function addListItem({ text, id, done }) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  li.appendChild(span);
  li.id = id;
  span.innerText = text;     
  list.appendChild(li);
  li.appendChild(deleteButton);
  deleteButton.innerText = "X";
  //삭제버튼 누르면 삭제되는 함수
  deleteButton.addEventListener("click", deleteListItem);

  if (done) {
    span.classList.add("checkText");
  }
  //클릭하면 선 생기는 함수
  span.addEventListener("click", check(id));
}

//새로고침하면 데이터 유지시키는 함수
if (location.reload && localStorage.length !== 0) {
  todosave = JSON.parse(localStorage.getItem("todosave"));
  for (let i = 0; todosave[i]; i++) {
    addListItem(todosave[i]);
  }
}
