const openBtn = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')
const loginBtn = document.querySelector('#login-btn')
const signupBtn = document.querySelector('#signup-btn')
const pwInput = document.querySelector('#password')
const pwSt = document.querySelector('#pw-status')
const pwBar = document.querySelector('.pw-gauge-bar')
const statusMsg = document.querySelector('#status-msg')

openBtn.addEventListener('click', function() {
  document.querySelector('.black-bg').classList.add('show')
  clearStatus()
})

closeBtn.addEventListener('click', function() {
  document.querySelector('.black-bg').classList.remove('show')
  clearStatus()
})

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}')
}

function setUsers(users) {
  localStorage.setItem('users', JSON.stringify(users))
}

function showStatus(message, isError = false) {
  statusMsg.textContent = message
  statusMsg.className = isError ? 'status-msg error' : 'status-msg success'
}

function clearStatus() {
  statusMsg.textContent = ''
  statusMsg.className = 'status-msg'
}

pwInput.addEventListener('input', function() {
  const len = pwInput.value.length
  pwSt.innerHTML = `<span style="color: ${len >= 6 ? 'green' : 'red'}">${len >= 6 ? '안전한 비밀번호 입니다' : '6글자 이상 입력하세요'}</span>`
  const progress = len * 10
  pwBar.style.width = `${len <= 10 ? progress : 100}%`
  pwBar.style.background = `${len >= 6 ? 'green' : len >= 4 ? 'yellow' : 'red'}`
})

loginBtn.addEventListener('click', function() {
  const email = document.querySelector('#email').value.trim()
  const password = pwInput.value

  if (!email || !password) {
    showStatus('이메일과 비밀번호를 모두 입력하세요.', true)
    return
  }

  const users = getUsers()
  if (!users[email]) {
    showStatus('등록된 계정이 없습니다. 회원가입을 먼저 해주세요.', true)
    return
  }

  if (users[email] !== password) {
    showStatus('비밀번호가 일치하지 않습니다.', true)
    return
  }

  showStatus('로그인 성공! 환영합니다.', false)
})

signupBtn.addEventListener('click', function() {
  const email = document.querySelector('#email').value.trim()
  const password = pwInput.value

  if (!email || !password) {
    showStatus('이메일과 비밀번호를 모두 입력하세요.', true)
    return
  }

  if (password.length < 6) {
    showStatus('비밀번호는 6자 이상이어야 합니다.', true)
    return
  }

  const users = getUsers()
  if (users[email]) {
    showStatus('이미 등록된 이메일입니다. 다른 이메일을 사용하세요.', true)
    return
  }

  users[email] = password
  setUsers(users)
  showStatus('회원가입이 완료되었습니다. 로그인 해주세요.', false)
})