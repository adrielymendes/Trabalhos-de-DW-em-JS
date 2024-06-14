# Comparação 
Comparação refere-se ao processo de avaliar se duas expressões ou valores são iguais, diferentes, maiores, menores ou outras relações entre eles. Os operadores de comparação são usados para realizar essas comparações e retornar um valor booleano (verdadeiro ou falso) com base no resultado da comparação.

Alguns dos operadores de comparação mais comuns
- Igual a (==)
- Diferente de (!=)
- Estritamente igual a (===)
- Estritamente diferente de (!==)
- Maior que (>)
- Menor que (<)
- Maior ou igual a (>=)
- Menor ou igual a (<=)
  
# Exemplo
```js 
// Igual a (==)
console.log(5 == 5); // Saída: true
console.log("5" == 5); // Saída: true (conversão de tipo implícita)
console.log(5 == 10); // Saída: false

// Diferente de (!=)
console.log(5 != 10); // Saída: true
console.log("5" != 5); // Saída: false (conversão de tipo implícita)

// Estritamente igual a (===)
console.log(5 === 5); // Saída: true
console.log("5" === 5); // Saída: false (tipos diferentes)
console.log(5 === 10); // Saída: false

// Estritamente diferente de (!==)
console.log(5 !== 10); // Saída: true
console.log("5" !== 5); // Saída: true (tipos diferentes)

// Maior que (>)
console.log(10 > 5); // Saída: true
console.log(5 > 10); // Saída: false

// Menor que (<)
console.log(5 < 10); // Saída: true
console.log(10 < 5); // Saída: false

// Maior ou igual a (>=)
console.log(10 >= 5); // Saída: true
console.log(5 >= 10); // Saída: false
console.log(10 >= 10); // Saída: true

// Menor ou igual a (<=)
console.log(5 <= 10); // Saída: true
console.log(10 <= 5); // Saída: false
console.log(10 <= 10); // Saída: true

```
## Exercicio
Crie função chamada verificarMaiorQueDez que recebe um número como argumento e retorna true se o número for maior que 10 e false caso contrário.
```js
function verificarMaiorQueDez(numero) {
    return numero > 10;
}
console.log(verificarMaiorQueDez(5)); 
console.log(verificarMaiorQueDez(15)); 

```