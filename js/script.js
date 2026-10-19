const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

//버튼을 클리하면
btn.addEventListener('click',() => {
    //nav 요소의 클래스에 dpen-menu를 토급한다. 
    nav.classList.toggle('open-menu');


//만약 btn 요소의 innerHTML이 'Menu'인 경우,
    if (btn.innerHTML === 'Menu'){
        //btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close';
    }
    else{
        //btn 요소의 innerHTML을 'Menu'로 변경
        btn.innerHTML = 'Menu'
    }

});