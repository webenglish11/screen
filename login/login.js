document.querySelector('#open-btn').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('show')
})

document.querySelector('#close-btn').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show')
})

const pwInput = document.querySelector('#password')

const idInput = document.querySelector('#email')

const pwSt = document.querySelector('#pw-status')

const pwBar = document.querySelector('.pw-gauge-bar')

document.querySelector('#login-btn').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('show')
})


document.querySelector('#signup-btn').addEventListener('click', function(){
    const len = pwInput.value.length
    const ad_len = idInput.value.length

    if (len < 6)
    {
        alert(`비밀번호를 6글자 이상 입력해주세요.`)
        return
    }
    if (ad_len < 4)
    {
        alert(`아이디를 4글자 이상 입력해주세요.`)
        return
    }
    alert(`회원가입에 완료되었습니다. 로그인버튼을 누르세요.`)

})

document.querySelector('#login-btn').addEventListener('click', function(){
    const len = pwInput.value.length
    const ad_len = idInput.value.length

    if (len < 6)
    {
        alert(`비밀번호나 아이디가 다릅니다`)
        return
    }
    if (ad_len < 4)
    {
        alert(`비밀번호나 아이디가 다릅니다`)
        return
    }
    document.location.href = "http://127.0.0.1:5500/main/main.html";

})

pwInput.addEventListener('input', function(){
    const len = pwInput.value.length

    pwSt.innerHTML = `<p style = "color : ${len >= 6 ? 'green' : 'red'}"> 
    ${len >= 6 ? '안전한 비밀번호 입니다' : '6글자 이상 입력하세요'}
    </p>`

    const progress = len * 10 

    pwBar.style.width = `${len <= 10 ? progress : 100}%`

    pwBar.style.background = `${len >= 6 ? 'green' : (len >= 4 ? 'yellow' : 'red')}`
})