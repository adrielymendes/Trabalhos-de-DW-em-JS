## Array 
Um array é uma estrutura de dados que pode armazenar uma coleção de elementos sob um único nome. Cada elemento em um array é acessado por meio de um índice, que representa sua posição na coleção.

# Exemplo
```js 
// Criando um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numeros[0]); 
console.log(numeros[2]); 

// Modificando um elemento do array
numeros[1] = 10;
console.log(numeros); 

// Adicionando um elemento ao final do array
numeros.push(6);
console.log(numeros); 

// Removendo o último elemento do array
numeros.pop();
console.log(numeros); 

// Tamanho do array
console.log(numeros.length); 

```
## Exercicio 
Desenvolva uma função chamada somarArray que recebe um array de números como argumento e retorna a soma de todos os elementos desse array.

```js
function somarArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

console.log(somarArray([1, 2, 3, 4, 5])); 
console.log(somarArray([10, 20, 30])); 

```