## Tipos Primitivos 
Tipos primitivos, são os tipos de dados básicos e fundamentais que representam valores simples e imutáveis. Em JavaScript, os tipos primitivos são armazenados diretamente na memória e são acessados de forma rápida e eficiente.

Alguns Tipos Primitivos:
- Number:
- String:
- Boolean: 
- Null: 
- Undefined: 
- Symbol: 

## Exemplo
```js
// Number: Representa números inteiros e decimais
let idade = 25;
let preco = 10.99;

// String: Representa sequências de caracteres
let nome = "Maria";
let mensagem = 'Olá, mundo!';

// Boolean: Representa valores lógicos verdadeiro (true) ou falso (false)
let temFilhos = true;
let estaChovendo = false;

// Null: Representa a ausência intencional de um valor
let valorNulo = null;

// Undefined: Representa valores que não foram definidos ou inicializados
let indefinido;

// Symbol: Representa valores únicos e imutáveis
const id = Symbol("id");

// Exibindo os valores das variáveis
console.log("Idade:", idade);
console.log("Preço:", preco);
console.log("Nome:", nome);
console.log("Mensagem:", mensagem);
console.log("Tem filhos:", temFilhos);
console.log("Está chovendo:", estaChovendo);
console.log("Valor nulo:", valorNulo);
console.log("Indefinido:", indefinido);
console.log("Symbol:", id);

```
## Exercicio 
  faça um sistema de cadastro de usuários para um aplicativo.crie uma função chamada verificarCadastro que recebe como parâmetros o nome de usuário e a idade e verifica se o cadastro pode ser aceito com base nessas informações.
  ```js
  function verificarCadastro(nome, idade) {
    if (typeof nome === "string" && nome.trim() !== "" && typeof idade === "number" && idade >= 18) {
        console.log("Cadastro aceito");
    } else {
        console.log("Cadastro recusado");
    }
}

// Exemplo de Uso
verificarCadastro("Joao", 25); // Saída: Cadastro aceito
verificarCadastro("", 17); // Saída: Cadastro recusado
  ```