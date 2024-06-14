# Indefinido 
Undefined é um valor primitivo que representa a ausência de valor. Especificamente, é retornado quando uma variável foi declarada, mas ainda não foi atribuída a um valor. Também pode ser retornado implicitamente por funções que não têm uma instrução return, ou explicitamente por atribuição de undefined

# Exemplo 
```js
let x;
console.log(x); // Saída: undefined

function retornaUndefined() {
    // Esta função não tem uma instrução return, então retorna implicitamente undefined
}

console.log(retornaUndefined()); // Saída: undefined

let y = undefined;
console.log(y); // Saída: undefined

```
# Exercicio 
Crie uma função chamada verificarIndefinido que recebe uma variável como argumento e verifica se ela está indefinida. A função deve retornar true se a variável estiver indefinida e false caso contrário.
```js
function verificarIndefinido(variavel) {
    return variavel === undefined;
}
let x;
console.log(verificarIndefinido(x)); 

let y = 10;
console.log(verificarIndefinido(y)); 

```