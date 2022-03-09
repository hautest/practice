const main = document.querySelector(".main");
const button = document.querySelector(".button");
const list = document.querySelector(".list")
const input =document.querySelector("#input");
const form =document.querySelector("#form");
const span =document.querySelector("span")
const todosave = [];

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

  todosave.push(input.value);
  localStorage.setItem("todosave",JSON.stringify(todosave) ); 
  input.value = '';
  

  //삭제버튼 클릭
  delete1.onclick = function B () { 
    todosave.splice(0, todosave.length);
    localStorage.clear(); 
    todosave.push(span.value);  
    localStorage.setItem("todosave",JSON.stringify(todosave) ); 
    list.removeChild(li);
    li.removeChild(span); 
      }




 //리스트에 써놓은것 클릭하면 선 그어지기

span.addEventListener("click", check);

function check () { 
     span.classList.toggle("checkText")
}
}

} 
//새로고침하면 값 유지하기
if (location.reload && localStorage.length !== 0) {
    console.log("reload");
    let savelist = JSON.parse( localStorage.getItem("todosave"));
  
   
    for (i=0; savelist[i]; i++){
        const li = document.createElement("li");
        list.appendChild(li);
        const span = document.createElement("span");
        li.appendChild(span);
        span.innerText = savelist[i]
        const delete1 = document.createElement("button");
        li.appendChild(delete1);
        delete1.innerText = "X"

        delete1.onclick = function B () { 
            todosave.splice(0, todosave.length);
            localStorage.clear(); 
            todosave.push(span.value);  
            localStorage.setItem("todosave",JSON.stringify(todosave) ); 
            list.removeChild(li);
            li.removeChild(span); 
              }

              span.addEventListener("click", check);

            function check () { 
                span.classList.toggle("checkText")
}


    }


     
    
        
    
    


 
}

 


form.addEventListener('submit', A)
