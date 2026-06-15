document.querySelector('#open-btn').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show')
})

document.querySelector('#close-btn').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show')
})

const pwInput = document.querySelector('#password')

const pwSt = document.querySelector('#pw-status')

const pwBar = document.querySelector('.pw-gauge-bar')


pwInput.addEventListener('input', function(){
    const len = pwInput.value.length

    pwSt.innerHTML = `<p style = "color : ${len >= 6 ? 'green' : 'red'}"> 
    ${len >= 6 ? '안전한 비밀번호 입니다' : '6글자 이상 입력하세요'}
    </p>`

    const progress = len * 10 

    pwBar.style.width = `${len <= 10 ? progress : 100}%`

    pwBar.style.background = `${len >= 6 ? 'green' : (len >= 4 ? 'yellow' : 'red')}`
})