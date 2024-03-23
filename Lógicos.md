## Lógicos 
Operadores lógicos são utilizados em programação para realizar operações lógicas entre valores booleanos (verdadeiro ou falso). Esses operadores são fundamentais para controlar o fluxo de execução de um programa.

Os operadores lógicos mais comuns
- E lógico (&&): Retorna verdadeiro se ambas as expressões forem verdadeiras.
- OU lógico (||): Retorna verdadeiro se pelo menos uma das expressões for verdadeira.
- NÃO lógico (!): Inverte o valor de verdadeiro para falso e vice-versa.

# Exemplo
```JS
let idade = 20;
let possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}  

```
# Exercicio
Desenvolva uma função chamada verificarAprovacao que recebe duas notas (nota1 e nota2) como argumentos e retorna true se a média das notas for maior ou igual a 7 e false caso contrário.
```js
function verificarAprovacao(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media >= 7;
}
console.log(verificarAprovacao(6, 8)); 
console.log(verificarAprovacao(9, 9)); 

```