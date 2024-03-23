#   Corda 
Uma "corda" em JavaScript é uma sequência de caracteres, também conhecida como "string". Uma string é usada para representar texto e é definida entre aspas simples (') ou aspas duplas (").
 
# Exemplo 
```js 
let saudacao = 'Olá, mundo!';
let nome = "João";
let mensagem = "Bem-vindo ao meu website.";

console.log(saudacao);
console.log(nome);
console.log(mensagem);

```
# Exercicio 
Crie uma função chamada concatenarStrings que recebe duas strings como argumentos e retorna uma nova string que contém a concatenação das duas strings fornecidas.
```js 
function concatenarStrings(str1, str2) {
    return str1 + str2;
}
console.log(concatenarStrings("Olá", "mundo")); 
console.log(concatenarStrings("JavaScript", "é incrível")); 

```