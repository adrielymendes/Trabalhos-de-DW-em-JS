# Número 
Número é um tipo de dado que representa valores numéricos, sejam eles inteiros, de ponto flutuante (decimais) ou números especiais como Infinity e NaN (Not a Number).

# Exemplo 

```JS 
let inteiro = 42; // Número inteiro
let decimal = 3.14; // Número decimal
let cientifico = 6.022e23; // Notação científica
let infinito = Infinity; // Representa infinito
let naoNumero = NaN; // Representa um valor não numérico

console.log("Número inteiro:", inteiro);
console.log("Número decimal:", decimal);
console.log("Notação científica:", cientifico);
console.log("Infinito:", infinito);
console.log("Não numérico:", naoNumero);

```
# Exercicio 
Crie uma função chamada calcularAreaRetangulo que calcula a área de um retângulo com base na largura e na altura fornecidas como argumentos.
```js
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
console.log(calcularAreaRetangulo(5, 10)); 
console.log(calcularAreaRetangulo(3, 7)); 

```