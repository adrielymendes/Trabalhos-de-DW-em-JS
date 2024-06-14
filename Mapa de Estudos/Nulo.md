## Nulo
Nulo é um valor especial que representa a ausência intencional de valor. Ao contrário de undefined, que indica a ausência de valor devido a uma variável não inicializada ou falta de retorno de uma função, null é atribuído explicitamente para indicar que uma variável não possui valor ou que um objeto não aponta para nenhum lugar na memória.

# Exemplo
```js
let pessoa = {
    nome: "João",
    idade: 30,
    endereco: null // Endereço não definido inicialmente
};

console.log(pessoa.nome); // Saída: João
console.log(pessoa.endereco); // Saída: null

// Mais tarde, o endereço é atribuído
pessoa.endereco = "Rua ABC, 123";
console.log(pessoa.endereco); // Saída: Rua ABC, 123

```

# Exercicio 
Crei uma função chamada verificarNulo que recebe uma variável como argumento e verifica se ela é null. A função deve retornar true se a variável for null e false caso contrário.

```js
function verificarNulo(variavel) {
    return variavel === null;
}
let x = null;
console.log(verificarNulo(x)); 

let y = 10;
console.log(verificarNulo(y)); 

```