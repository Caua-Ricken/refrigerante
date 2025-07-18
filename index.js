let list = document.querySelectorAll('.caixa-refri')
let next = document.getElementById('proximo')
let prev = document.getElementById('voltar')

let count = list.length
let active = 0 

next.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('ativo')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

    active = active <= 0 ? count -1 : active -1
    list[active].classList.add('ativo')
}