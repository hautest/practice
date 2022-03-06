const main = document.querySelector(".main");
const button = document.querySelector(".button");
const list = document.querySelector(".list")
const input =document.querySelector("#input");
const form =document.querySelector("#form");

function A(event) { 
    event.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");

if (input.value === ""){
    alert("리스트를 입력해주십시오");
}
else {
    const delete1 = document.createElement("button");
  li.appendChild(span);
  span.innerText = input.value;
  list.appendChild(li);
  li.appendChild(delete1);
  delete1.innerText = "X"
  input.value = '';
 



  //삭제버튼 클릭
  delete1.onclick = function B () { 
    list.removeChild(li);
    li.removeChild(span);
      
}
}

} 
form.addEventListener('submit', A)




    