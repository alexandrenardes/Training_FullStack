// Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 5, 6, 9)
imprimirSoma()

//Funcao com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(4, 5))
console.log(soma(2))
console.log(soma())