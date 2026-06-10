// 1. HTML에서 제어할 요소(태그)들을 가져옵니다.
const logoButton = document.querySelector('.classcard');
const loginButtons = document.querySelectorAll('.login'); // 로그인, 회원가입이 같은 클래스라 모두 가져옴
const mainTitle = document.querySelector('.main-wrapper h2');

// 2. [Classcard] 로고를 클릭했을 때 실행할 기능
logoButton.addEventListener('click', function() {
    // 중앙 텍스트를 기본 문구로 변경
    mainTitle.textContent = "환영합니다";
    mainTitle.style.color = "#333"; // 글자 색상 초기화
    alert("홈으로 이동합니다!");
});

// 3. [로그인]과 [회원가입] 버튼을 클릭했을 때 실행할 기능
// querySelectorAll로 가져온 요소들은 'forEach'를 사용해 각각 이벤트를 걸어줘야 합니다.
loginButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // 클릭한 버튼의 글자 텍스트(로그인 또는 회원가입)를 가져옵니다.
        const buttonText = button.textContent;
        
        // 중앙의 "환영합니다" 글자를 변경합니다.
        mainTitle.textContent = `${buttonText} 페이지 준비 중입니다.`;
        mainTitle.style.color = "#6200ea"; // 텍스트 색상을 예쁜 보라색으로 포인트를 줍니다.
        
        // 알림창 띄우기
        alert(`${buttonText} 창을 연결합니다.`);
    });
});