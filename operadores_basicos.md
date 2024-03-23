# Operadores Basicos 
Operadores básicos são símbolos especiais que são usados para realizar operações em operandos. utilizados para executar operações matemáticas, comparações, atribuições e outras operações em variáveis e valores.

Temos aqui alguns operadores 
- 
- Aritméticos: São usados para realizar operações matemáticas básicas, como adição, subtração, multiplicação, divisão, resto da divisão, incremento e decremento.

Exemplos: +, -, *, /, %, ++, --.

- Comparação: São usados para comparar valores e retornar um valor booleano indicando se a comparação é verdadeira ou falsa.

Exemplos: == (igual a), != (diferente de), === (igual a e do mesmo tipo), !== (diferente de e do mesmo tipo), > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a).

- Lógicos: São usados para realizar operações lógicas em valores booleanos, como E lógico, OU lógico e NÃO lógico.

Exemplos: && (E lógico), || (OU lógico), ! (NÃO lógico)
  
- Atribuição: São usados para atribuir valores a variáveis.

Exemplos: =, +=, -=, *=, /=, %=, entre outros.

- Concatenação de strings: O operador + também pode ser usado para concatenar strings.

Exemplo: "Olá, " + "mundo!" resulta em "Olá, mundo!".

# Exemplo 
```js 
// Operadores aritméticos
let x = 10;
let y = 5;
console.log("Adição:", x + y); // Saída: 15
console.log("Subtração:", x - y); // Saída: 5
console.log("Multiplicação:", x * y); // Saída: 50
console.log("Divisão:", x / y); // Saída: 2
console.log("Resto da divisão:", x % y); // Saída: 0
console.log("Incremento:", ++x); // Saída: 11
console.log("Decremento:", --y); // Saída: 4

// Operadores de comparação
let a = 10;
let b = 5;
console.log("Igual a:", a == b); // Saída: false
console.log("Diferente de:", a != b); // Saída: true
console.log("Maior que:", a > b); // Saída: true
console.log("Menor que:", a < b); // Saída: false
console.log("Maior ou igual a:", a >= b); // Saída: true
console.log("Menor ou igual a:", a <= b); // Saída: false

// Operadores lógicos
let p = true;
let q = false;
console.log("E lógico:", p && q); // Saída: false
console.log("OU lógico:", p || q); // Saída: true
console.log("NÃO lógico:", !p); // Saída: false

// Operadores de atribuição
let num = 10;
num += 5; // Equivalente a: num = num + 5
console.log("Atribuição de adição:", num); 
num -= 3; // Equivalente a: num = num - 3
console.log("Atribuição de subtração:", num); 
num *= 2; // Equivalente a: num = num * 2
console.log("Atribuição de multiplicação:", num); 
num /= 4; // Equivalente a: num = num / 4
console.log("Atribuição de divisão:", num); 
num %= 3; // Equivalente a: num = num % 3
console.log("Atribuição de resto da divisão:", num); 

```
# Exercicio 
Crie uma função chamada calcularMedia que recebe dois números como argumentos e retorna a média desses números.
```js
function calcularMedia(numero1, numero2) {
    return (numero1 + numero2) / 2;
}
console.log(calcularMedia(5, 10)); 
console.log(calcularMedia(20, 90)); 

```