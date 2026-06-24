
const addBtn = document.querySelector('.add-btn')
const list = document.querySelector('.list')

function loadTodos(){
    const save = localStorage.getItem("gkggk")

    if (save)
    {
        list.innerHTML = save
    }
}

loadTodos()

function saveTodos()
{
    localStorage.setItem("gkggk", list.innerHTML)
}

addBtn.addEventListener('click', function(){
    const txt = input.value
    if (txt.trim() === ''){
        alert("내용 입력 바랍니다")
        return
    }
    const html = `<li class='todo-item'>
        <p> ${txt} </p>
        </li>
    `
    list.innerHTML +=  html
    saveTodos()
    input.value = ' '
})