function insertToDisplay(data) {
  
    document.querySelector('#Display').value += data; // Adiciona o valor ao display
}

function clean() {
    document.querySelector('#Display').value = ''; // Limpa o display( a tela da calculadora)
}

function back() {
    const display = document.querySelector('#Display'); // Selecionei o elemento pelo id

    display.value = display.value.slice(0, -1); // Removi o último caractere
}

function igual () {
    const display = document.querySelector('#Display'); // Selecionei o elemento
    try {
        display.value = eval(display.value); 
    } catch {
        display.value = 'Error'; // Exibe "Error" em caso de erro
    }
} //agora vou explicar todo meu codigo primeiro eu criei uma function chamada insertToDisplay  que é o responsavel por adicionar valoraes na tela da calculadora ela foi chamada quando a pessoa clica em um botao da calculadora
//  que recebe um parametro chamado data  que é o valor que eu quero adicionar ao display exemplo insertToDisplay(numero qualquer)
// depois eu selecionei o elemento com o id Display e 
// adicionei o valor ao display, depois eu criei uma function chamada clean que seleciona o elemento com o id Display e limpa o display,
//  depois eu criei uma function chamada back que seleciona o elemento com o id Display e remove o ultimo caractere, 
// depois eu criei uma function chamada igual que seleciona o elemento com o id Display e tenta executar o eval que é uma função que executa o código javascript, 
// se der erro ele exibe "Error" no display.

// o display simplesmente é o display da calculadora que é onde os numeros e operações vai aparecer.