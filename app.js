'use strict'

import { showArray  } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

// MAP - Percorre o array e retorna um array do mesmo tamanho modificado ou não
// Sintaxe - array.map(callback)
//Parametros do callback
// 1 - elemento 
// 2 - indice
// 3 - array

// aplicando um desconto de 2 no array
const desconto2 = (number) => number - 2
const numbersDesconto = numbers.map (desconto2)

// FILTER - Percorre um array aplicando um callback e retorna um array do mesmo tamanho ou nao
// Sintaxe - array.filter (callback)
//Parametros do callback
// 1 - elemento 
// 2 - indice
// 3 - array
//Retorno do callback tem que ser booleano

// Filtrar os elementos menores de 20

// criando uma variavel que determina se um numero é ou nao menor que 20, retornando true ou false
const menor20 = (valor) => valor < 20
// se for menor(true) ele vai para esse array
const valoresMenores20 = numbers.filter(menor20)

// REDUCE - Percorre o array aplicando um callback e retorna um unico valor
// Sintaxe - array.reduce (callback, valorInicial)
//Parametros do callback
// 1 - Acumulador
// 2 - elemento 
// 3 - indice
// 4 - array
// Valor inicial pode ser qualquer tipo de variace


//Exercicios 


// 1 - Aumentar 100 em cada elemento
const cem = (number) => number + 100
const aumentarCem = numbers.map(cem)

// 2 - Somente os numeros pares
const par = (valor) => valor % 2 == 0
const numerosPares = numbers.filter(par)

// 3 - Total dos valores com desconto de 4
const desconto4 = (acumulador,valor) => acumulador + (valor - 4)
const valorDesconto4 = numbers.reduce(desconto4, 0)

// 4 - Array com os elementos impares somando 21
const impares = (number) => number % 2 != 0
const somarImpares = (number) => number + 21
const impares21 = numbers.filter(impares).map(somarImpares)

//Somar todos os valores
const soma = (a, b) => a + b
const valorTotal = numbers.reduce(soma, 0)

showArray(numbers, 'main', 'Todos os números:')
showArray(numbersDesconto, 'main', 'Com desconto:')
showArray(valoresMenores20, 'main', 'Menores que 20:')
showArray([valorTotal], 'main', 'Total de valores:')
showArray(aumentarCem, 'main', 'Com aumento de 100:')
showArray(numerosPares, 'main', 'Números pares:')
showArray([valorDesconto4], 'main', 'Total de valores com desconto de 4:')
showArray(impares21, 'main', 'Array impares somado com 21:')

