const main = document.querySelector(".main");
const button = document.querySelector(".button");
const list = document.querySelector(".list")
const input =document.querySelector("#input");

function A() { 
    const inputvalue = document.getElementById('input').value;
    const li = document.createElement("li");
    const span = document.createElement("span");

if (inputvalue == ""){
    alert("리스트를 입력해주십시오");
}
else {
    const delete1 = document.createElement("button");
  li.appendChild(span);
  span.innerText = inputvalue;
  list.appendChild(li);
  li.appendChild(delete1);
  delete1.innerText = "X"
  inputvalue == '';
 



  //삭제버튼 클릭
  delete1.onclick = function B () { 
    list.removeChild(li);
    li.removeChild(span);
      
}
}

} 





    