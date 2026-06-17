
const logoButton = document.querySelector('.classcard');
const loginButtons = document.querySelectorAll('.login'); // 로그인, 회원가입이 같은 클래스라 모두 가져옴
const mainTitle = document.querySelector('.main-wrapper h2');


logoButton.addEventListener('click', function() {
    mainTitle.textContent = "환영합니다";
    mainTitle.style.color = "#333"; 

});


loginButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;
        
  
        mainTitle.textContent = `${buttonText} 페이지 준비 중입니다.`;
        mainTitle.style.color = "#6200ea"; 
        

        alert(`${buttonText} 창을 연결합니다.`);
    });
});