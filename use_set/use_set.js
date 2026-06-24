// 1. 12개의 단어 데이터 배열 (오타 수정 및 콤마 채움)
const words = [
    { id: 1, word: "apple", meaning: "사과", isImportant: true },
    { id: 2, word: "banana", meaning: "바나나", isImportant: true },
    { id: 3, word: "pear", meaning: "배", isImportant: true },
    { id: 4, word: "podo", meaning: "포도", isImportant: true }, // 콤마 추가
    { id: 5, word: "handsome", meaning: "not(구범준)", isImportant: true }, // 콤마 추가
    { id: 6, word: "bouble tea", meaning: "버블티", isImportant: true },
    { id: 7, word: "pizza", meaning: "피자", isImportant: true },
    { id: 8, word: "git", meaning: "멍청이, 재수 없는 인간", isImportant: true },
    { id: 9, word: "add", meaning: "추가하다", isImportant: true }, // 콤마 추가
    { id: 10, word: "commit", meaning: "범하다", isImportant: true }, // 콤마 추가
    { id: 11, word: "goofy", meaning: "바보같은", isImportant: true },
    { id: 12, word: "park gyu tae", meaning: "박규태", isImportant: true }
];

const cardGrid = document.getElementById('cardGrid');

// 2. 단어 카드를 그리드 안에 그려주는 함수
function displayCards() {
    cardGrid.innerHTML = ''; // 그리드 초기화

    // [보너스] 상단 배너의 카드 개수(ex: 12 카드)를 데이터 길이에 맞춰 자동 변경
    const countText = document.querySelector('.card-count');
    if (countText) {
        countText.innerText = `${words.length} 카드 | jtmakim9918`;
    }

    words.forEach(item => {
        // 카드 엘리먼트 생성
        const card = document.createElement('div');
        card.className = 'word-card';
        
        // 중요 표시(별) 상태 적용
        const starClass = item.isImportant ? 'star-icon active' : 'star-icon';

        card.innerHTML = `
            <span class="${starClass}" data-id="${item.id}">★</span>
            <div class="word-text" id="word-${item.id}">${item.word}</div>
        `;

        // [기능 A] 카드를 클릭하면 단어와 뜻이 토글(전환)됨
        card.addEventListener('click', () => {
            const textElement = document.getElementById(`word-${item.id}`);
            if (card.classList.contains('flipped')) {
                card.classList.remove('flipped');
                textElement.innerText = item.word;
            } else {
                card.classList.add('flipped');
                textElement.innerText = item.meaning;
            }
        });

        // [기능 B] 별표 클릭 시 토글 (카드 뒤집힘 방지)
        const star = card.querySelector('.star-icon');
        star.addEventListener('click', (event) => {
            event.stopPropagation(); // 카드 뒤집히는 이벤트 전파 막기
            item.isImportant = !item.isImportant;
            displayCards(); // 데이터 갱신 후 다시 그리기
        });

        cardGrid.appendChild(card);
    });
}

// 웹페이지가 열리면 바로 단어장 띄우기
window.onload = displayCards;