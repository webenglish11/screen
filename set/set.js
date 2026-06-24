const addBtn = document.querySelector('.add-btn')
const inputs = document.querySelectorAll('.word')
const list = document.querySelector('.list')

function loadSets() {
    const save = localStorage.getItem('gkggk')
    if (save) list.innerHTML = save
}

function saveSets() {
    localStorage.setItem('gkggk', list.innerHTML)
}

loadSets()

addBtn.addEventListener('click', function () {
    const en = inputs[0].value.trim()
    const ko = inputs[1].value.trim()

    if (en === '' || ko === '') {
        alert('영단어와 한국어를 모두 입력해주세요')
        return
    }

    const li = document.createElement('li')
    li.className = 'todo-item'
    li.innerHTML = `<p>${en} - ${ko}</p>`

    list.appendChild(li)
    saveSets()

    inputs[0].value = ''
    inputs[1].value = ''
    inputs[0].focus()
})
