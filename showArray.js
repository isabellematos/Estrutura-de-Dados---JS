'use strict'

const showArray = (array, element, title='array') => {
    // Selecionando um elemento no DOM
    const container = document.querySelector(element)
    // Criando um novo elemento DIV
    const div = document.createElement('div')
    // adiciona uma classe na div criada
    div.classList.add('numbers-container')

    //  Preenchendo a DIV nova com os elementos do array
    div.innerHTML = `
    <h2>${title}</h2>
    <div class="numbers-item">
        ${array.join('</div><div class="numbers-item">')}
    </div>
    `

    // Inserindo a nova div(elemento) no DOM
    container.appendChild(div)
}

export {
    showArray
}