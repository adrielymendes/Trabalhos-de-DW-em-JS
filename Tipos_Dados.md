## Tipos de Dados 
Um tipo de dados, em programação, é uma classificação que especifica que tipo de valor uma variável pode conter e quais operações podem ser realizadas com esse valor. 

Alguns exemplos de tipos de dados 

- Number: representa números, inteiros ou decimais, como 42 ou 3.14.
- String: representa sequências de caracteres, como "Olá, mundo!" ou "JavaScript".
- Boolean: representa valores lógicos, verdadeiro ou falso (true ou false).
Null: representa a ausência de valor ou a ausência intencional de um valor.
Undefined: representa uma variável que foi declarada, mas ainda não foi atribuída a um valor.
- Object: representa uma coleção de dados ou valores relacionados, geralmente contendo propriedades e métodos.
- Symbol: representa valores únicos e imutáveis, frequentemente usados como identificadores únicos para propriedades de objetos.
  
# Exemplo 
```js 
// Declaração de variáveis com diferentes tipos de dados
let nome = "Maria"; // String
let idade = 30; // Number
let altura = 1.65; // Number
let temFilhos = true; // Boolean
let interesses = ["leitura", "esportes", "viagens"]; // Array
let endereco = { rua: "Rua Principal", numero: 123, cidade: "Exemploville" }; // Object
let simbolo = Symbol("chave"); // Symbol
let valorNulo = null; // Null
let indefinido; // Undefined

// Exibição dos valores das variáveis
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Tem filhos:", temFilhos);
console.log("Interesses:", interesses);
console.log("Endereço:", endereco);
console.log("Símbolo:", simbolo);
console.log("Valor Nulo:", valorNulo);
console.log("Indefinido:", indefinido);

```
- Exercicio: Um sistema de registro de alunos para uma escola. O sistema deve ser capaz de armazenar informações básicas sobre os alunos, como nome, idade, série e notas em diferentes disciplinas.

```js
// Registro do aluno
let aluno = {
    nome: "João",
    idade: 15,
    serie: "9º ano",
    notas: {
        Matemática: 8,
        Português: 7,
        Ciências: 9,
        História: 6
    }
};

// Exibição das informações do aluno
console.log("Nome do aluno:", aluno.nome);
console.log("Idade do aluno:", aluno.idade);
console.log("Série do aluno:", aluno.serie);
console.log("Notas do aluno:", aluno.notas);

```