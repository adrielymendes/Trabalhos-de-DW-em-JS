## Aritméticos 
Operadores aritméticos são símbolos especiais utilizados para realizar operações matemáticas em operandos, como adição, subtração, multiplicação, divisão.

- Adição (+): Utilizado para somar dois valores.
- Subtração (-): Utilizado para subtrair o segundo valor do primeiro.
- Multiplicação (*): Utilizado para multiplicar dois valores.
- Divisão (/): Utilizado para dividir o primeiro valor pelo segundo. 
- Resto da Divisão (%): Retorna o resto da divisão do primeiro valor pelo segundo.
- Incremento (++) e Decremento (--): Utilizados para aumentar ou diminuir o valor de uma variável em 1 unidade, respectivamente. 
  
# Exemplo 
```js 
// Operador de adição (+)
let soma = 5 + 3;
console.log("Soma:", soma); 

// Operador de subtração (-)
let diferenca = 10 - 4;
console.log("Diferença:", diferenca); 

// Operador de multiplicação (*)
let produto = 6 * 4;
console.log("Produto:", produto); 

// Operador de divisão (/)
let quociente = 20 / 5;
console.log("Quociente:", quociente); 

// Operador de resto da divisão (%)
let resto = 15 % 4;
console.log("Resto da divisão:", resto); 

// Operadores de incremento (++) e decremento (--)
let numero = 10;
numero++; // Incrementa o valor de numero em 1
console.log("Número após incremento:", numero); 

numero--; // Decrementa o valor de numero em 1
console.log("Número após decremento:", numero); 

```
## Exercicio 
Crie uma função chamada calcularAreaRetangulo que recebe a base e a altura de um retângulo como argumentos e retorna a área desse retângulo.

```js
function calcularAreaRetangulo(base, altura) {
    return base * altura;
}
console.log(calcularAreaRetangulo(5, 10)); 
console.log(calcularAreaRetangulo(8, 4)); 

```