//변수선언
const main = document.querySelector(".main");
const button = document.querySelector(".button");
const list = document.querySelector(".list")
const input =document.querySelector("#input");
const form =document.querySelector("#form");
let savelist = JSON.parse( localStorage.getItem("todosave"));
let todosave = [];

    //빈값 입력 방지
    form.addEventListener('submit', A)
    function A(a) {
        a.preventDefault();
    if (input.value ===""){
        alert("리스트를 입력해주십시오");
     } else makelist()
    }


//입력 받아서 리스트 만드는 함수
function makelist(text, id, done) {
    //입력값을 로컬스로지에 저장
    const todoobject = {
        text: input.value ||  savelist[i].text ,
        id: Math.floor(Math.random()*1000000)+1,
        done : false,
    }
   
    todosave.push(todoobject || savelist[i]);
    localStorage.setItem("todosave",JSON.stringify(todosave) ); 
    input.value = '';
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delete1 = document.createElement("button");
  li.appendChild(span);
  span.innerText = todoobject.text ;
  list.appendChild(li);
  li.appendChild(delete1);
  delete1.innerText = "X"
  li.id = id;


  span.addEventListener("click", check(id));
  if (done) {
    span.classList.add("checkText");
  }


  

//삭제버튼 누르면 삭제되는 함수
delete1.addEventListener('click', Fdelete)
    function Fdelete(event) {
    let li2 = event.target.parentElement;
    let deletedList = li2.id
    console.log(deletedList);
    list.removeChild(li);
    li.removeChild(span);
    todosave = todosave.filter((toDo) => toDo.id !== parseInt(li2.id));
    console.log(todosave);
    localStorage.setItem("todosave",JSON.stringify(todosave) ); 
    }



  //클릭하면 선 생기는 함수


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




}

//새로고침하면 데이터 유지시키는 함수
if (location.reload && localStorage.length !== 0) {
    console.log("reload");
    for (i=0; savelist[i]; i++){


    makelist()
}}


