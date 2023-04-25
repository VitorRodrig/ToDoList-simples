const input = document.querySelector('.input')
const lista = document.querySelector('ul')

function addTarefa(e){
    if(e.key === 'Enter'){
        const newLi = document.createElement('li')
        newLi.innerText = input.value
        lista.appendChild(newLi)

        input.value = ''
        const removeTarefaClass = document.getElementById('btnRemoverTarefa')
        removeTarefaClass.style.display = 'inline'
    }
}

input.addEventListener('keyup', addTarefa)

function removerTarefas(){
    const elementoPai = document.querySelector('ul')
    const elementoAremover = document.querySelector('li')

    elementoPai.removeChild(elementoAremover)

    document.querySelector('button').style.display = none

}


