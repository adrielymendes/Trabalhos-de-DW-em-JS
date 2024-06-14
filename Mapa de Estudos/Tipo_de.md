## Tipos de 
refere-se ao tipo de dados de uma variável ou valor tipos de dados que podem incluir tipos primitivos (como números, strings, booleanos) e tipos compostos (como arrays, objetos).Typeof é usado para determinar o tipo de um dado. Ele retorna uma string indicando o tipo de dado passado como argumento. 

# Exemplo 
```js
console.log(typeof 42); // Saída: "number"
console.log(typeof "Olá, mundo!"); // Saída: "string"
console.log(typeof true); // Saída: "boolean"
console.log(typeof [1, 2, 3]); // Saída: "object" (array é um tipo de objeto)
console.log(typeof { nome: "João", idade: 30 }); // Saída: "object"
console.log(typeof null); // Saída: "object" (isso é um erro conhecido em JavaScript)
console.log(typeof undefined); // Saída: "undefined"
console.log(typeof function() {}); // Saída: "function"

```
## Exercicio 
Desenvelva uma função chamada verificarTipoDado que recebe um valor como argumento e retorna uma string indicando o tipo desse valor.

```js
function verificarTipoDado(valor) {
    return typeof valor;
}
console.log(verificarTipoDado(42)); 
console.log(verificarTipoDado("Olá, mundo!")); 
console.log(verificarTipoDado(true)); 
```