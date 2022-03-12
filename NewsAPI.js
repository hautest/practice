let today = new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate()-1;// 날짜
let todayYearMonthData = `${year}-${month}-${date}`
console.log(todayYearMonthData);
const url =`https://newsapi.org/v2/everything?q=apple&from=${todayYearMonthData}&to=${todayYearMonthData}&sortBy=popularity&apiKey=4b96c49c883844e28e82e86e2480e9e1`;
const NewsDataDisplay = document.querySelector('.NewsDataDisplay');
const main = document.querySelector('main');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
//모달 관련 변수 선언
const modal = document.querySelector('.modal');
const button = document.querySelector('.button');
const modalImg = document.querySelector('.modalImg');
const modalTitle = document.querySelector('.modalTitle');
const modalContent = document.querySelector('.modalContent');


//Api 받아오기
fetch(url).then(response => response.json())
.then (data => {
    for (i=0 ; data.articles[i];i++ ){
        const articlesBox = document.createElement("span");
        const articleImage = document.createElement("img");
        const titleAndContent = document.createElement("span");
        const title = document.createElement("a");
        const content = document.createElement("a");
        //각각 기사 url, 제목, 내용, 사진
        const articleUrl =  data.articles[i].url;
        const articleTitleUrl =  data.articles[i].title;
        const articleContentUrl = data.articles[i].content;
        const articleImgUrl =data.articles[i].urlToImage ;


        articlesBox.className = 'articlesBox';
        titleAndContent.className ='titleAndContent';
        title.className = 'title';
        content.className = `content`;
        content.id = "content"+[i] ;
    
        
        
        
       
        NewsDataDisplay.appendChild(articlesBox);
        articlesBox.appendChild(articleImage);
        articlesBox.appendChild(titleAndContent);
        titleAndContent.appendChild(title);
        titleAndContent.appendChild(content);
        //제목 넣기
        title.innerText =articleTitleUrl
        
        //내용 넣기
        content.innerHTML = articleContentUrl;
        //이미지 넣기
        articleImage.setAttribute('src',articleImgUrl );
        //제목  클릭하면 기사로 이동
        title.setAttribute('href',articleUrl );
       
        //이미지에 이벤트주고 링크부여
        articleImage.addEventListener("click", imgClick)
        function imgClick () {
            location.href= articleUrl;
        }
        //내용 클릭하면 모달 생성
        const contentI = document.getElementById("content"+[i]);
        contentI.addEventListener('click', funModalOn)
        function funModalOn () { 
            //모달이미지 생성
            modalImg.setAttribute('src', articleImgUrl);
            modal.style.display = "flex";
            //모달타이틀 생성
            modalTitle.innerText=articleTitleUrl;
            //모달 내용생성
            modalContent.innerText=articleContentUrl;
            //바탕 흐릿하게 만들기
            NewsDataDisplay.style.opacity = 0.1;
            
            
            }

      
        
    }
    console.log(data);
      //모달 x버튼 클릭시 모달 사라짐
      button.addEventListener('click', funModaloff)        
      function funModaloff() {
          modal.style.display = "none"
          NewsDataDisplay.style.opacity = 1;
      }
});


