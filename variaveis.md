# Variaveis 
As variáveis são como recipientes que usamos em nossos códigos para armazenar e manipular dados. Elas nos ajudam a manter o controle e a organização das informações em nossos programas, permitindo-nos dar nomes significativos aos dados que queremos usar.
Temos varios metedos para declaraçã de variaveis essas são as mais utilizadas.
- ```Var```
- ```Let``` 
- ```Const```

Exemplo variável ```var``` :
-
- ```VAR```:
  Método usado para declarar variáveis.```var```é diferente do escopo de variáveis declaradas com let ou const. As variáveis declaradas com ```var``` têm escopo de função ou escopo global, o que significa que podem ser acessadas de qualquer lugar dentro da função ou do script onde foram declaradas.
  
  ```
  var numero = 10;
  var nome = "Joao";
  ```

```VAR``` - pode ser usado para declarar duas  variáveis: ```numero```
e ```nome```  A variável ```numero``` é atribuída com o valor 10, enquanto a variável  ```nome``` é atribuída com o valor "João" (uma string). Isto permite que você reserve um espaço na memória do computador para armazenar dados que podem ser usados ​​durante a execução do programa.Essas variáveis podem armazenar diferentes tipos de dados, como números, strings, booleanos, entre outros.

Exemplo variável ```let```:
-
- Variável ```let```:A função ```let```é utilizada para criar variáveis com escopo restrito ao bloco em que são definidas. Essas variáveis estão acessíveis apenas dentro do bloco em que são declaradas. Ao contrário das variáveis declaradas com ```var```, as variáveis definidas com ```let``` não são içadas (hoisted) para o topo do seu contexto de execução, permanecendo vinculadas ao bloco onde foram definidas. Além disso, uma variável declarada com ```let```não pode ser redeclarada no mesmo escopo, evitando erros de redefinição. Elas têm escopo de bloco, o que significa que não são acessíveis fora do bloco em que foram definidas, incluindo funções aninhadas. O hoisting das variáveis let é limitado, o que significa que elas não podem ser acessadas antes de sua declaração no código. Essas características tornam a função let.
  
```
  // Exemplo de uso da variável let

// Declaração de uma variável 'nome' utilizando let
let nome = "João";

// Modificação do valor da variável 'nome'
nome = "Maria";

// Impressão do valor atual da variável 'nome'
console.log("O nome é:", nome); // Saída: O nome é: Maria

// Bloco de código
{
    // Declaração de uma variável 'idade' utilizando let
    let idade = 25;

    // Impressão do valor da variável 'idade' dentro do bloco
    console.log("A idade é:", idade); // Saída: A idade é: 25
}

// Tentativa de acessar a variável 'idade' fora do bloco
// Isso resultará em um erro, pois 'idade' só é acessível dentro do bloco
// console.log("Fora do bloco, a idade é:", idade); // Isso resultaria em um erro


```
- ```let```:
  Declaramos uma variável nome usando let e a modificamos posteriormente.
Imprimimos o valor atual da variável nome.
Dentro de um bloco de código, declaramos uma variável idade usando let.
Imprimimos o valor da variável idade dentro do bloco.
Tentamos acessar a variável idade fora do bloco, o que resultaria em um erro, pois ela só é acessível dentro do bloco onde foi definida.

Exemplo variável const:
-
-A variável `const` em JavaScript representa um valor constante que não pode ser alterado após a atribuição inicial durante a execução do programa. Com escopo de bloco, as `const` devem ser inicializadas no momento da declaração, ao contrário de `let`. Se uma `const` contém um objeto ou array, seu valor não pode ser substituído, embora suas propriedades ou elementos possam ser modificados. Convencionalmente, identificadores de variáveis `const` são escritos em maiúsculas e separados por sublinhados para representar valores imutáveis ao longo do tempo. Em suma, `const` é fundamental para definir valores constantes e imutáveis em um programa.
  ```
  // Exemplo de uso da variável const

// Declaração de uma constante 'PI' representando o valor de π
const PI = 3.14159;

// Tentativa de atribuir um novo valor à constante 'PI'
// Isso resultará em um erro, pois não podemos alterar o valor de uma constante
// PI = 3.14; // Isso resultaria em um erro

// Impressão do valor da constante 'PI'
console.log("O valor de PI é:", PI); // Saída: O valor de PI é: 3.14159

// Declaração de uma constante 'nome' com uma string
const nome = "João";

// Tentativa de atribuir um novo valor à constante 'nome'
// Isso resultará em um erro, pois não podemos alterar o valor de uma constante
// nome = "Maria"; // Isso resultaria em um erro

// Impressão do valor da constante 'nome'
console.log("O nome é:", nome); // Saída: O nome é: João

  ```
- Neste exemplo:

Declaramos a constante PI com o valor de π.
Tentamos atribuir um novo valor à constante PI, o que resulta em um erro porque não podemos alterar o valor de uma constante.
Imprimimos o valor da constante PI.
Declaramos a constante nome com uma string.
Tentamos atribuir um novo valor à constante nome, o que também resulta em um erro.
Imprimimos o valor da constante nome.
Isso demonstra como as variáveis const são usadas para declarar valores constantes que não podem ser alterados ao longo do tempo durante a execução do programa.

 Exercícios com Variáveis para fixação :
-
- Exercício com variável ```var```:
  - 
desenvolva um programa para calcular a média de notas de um aluno em quatro disciplinas: Matemática, Ciências, História e Português. Crie um programa que solicite ao usuário que insira as notas dessas quatro disciplinas, calcule a média das notas e exiba o resultado na tela.

Utilize uma variável chamada 'var' para armazenar a média das notas.
 ```
    # Solicita ao usuário que insira as notas das quatro disciplinas
nota_matematica = float(input("Insira a nota de Matemática: "))
nota_ciencias = float(input("Insira a nota de Ciências: "))
nota_historia = float(input("Insira a nota de História: "))
nota_portugues = float(input("Insira a nota de Português: "))

# Calcula a média das notas e armazena na variável 'var'
var = (nota_matematica + nota_ciencias + nota_historia + nota_portugues) / 4

# Exibe o resultado na tela
print("A média das notas é:", var)

```
- Exercício com variável ```let```
  - 
Você está desenvolvendo um programa para calcular o total de despesas de um mês. O usuário fornecerá o valor de cada despesa, e o programa calculará e exibirá o total dessas despesas. Utilize uma variável chamada let para armazenar o total de despesas.
  
```
// Declaração da variável let para armazenar o total de despesas
let totalDespesas = 0;

// Solicita ao usuário que insira o número de despesas
const numeroDespesas = parseInt(prompt("Quantas despesas você teve este mês?"));

// Loop para obter e somar as despesas
for (let i = 1; i <= numeroDespesas; i++) {
    // Solicita ao usuário que insira o valor da despesa
    const valorDespesa = parseFloat(prompt(`Insira o valor da despesa ${i}:`));
    // Adiciona o valor da despesa ao total
    totalDespesas += valorDespesa;
}

// Exibe o total de despesas na tela
console.log(`O total de despesas deste mês é: ${totalDespesas.toFixed(2)}`);

```
a variável let é utilizada para armazenar o total de despesas do mês. O programa solicita ao usuário que insira o número de despesas, em seguida, solicita o valor de cada despesa e adiciona esses valores à variável let totalDespesas. Por fim, exibe o total de despesas na tela.

Exercício com variável ```const```:
-
Você está desenvolvendo um programa para calcular a área de um círculo. O usuário fornecerá o raio do círculo, e o programa calculará e exibirá a área correspondente. Utilize uma variável chamada const para armazenar o valor de Pi, que é aproximadamente 3.14159.
```
// Definição da constante para o valor de Pi
const PI = 3.14159;

// Solicita ao usuário que insira o raio do círculo
const raio = parseFloat(prompt("Insira o raio do círculo:"));

// Calcula a área do círculo
const area = PI * raio * raio;

// Exibe a área do círculo na tela
console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);

```
a variável const é utilizada para armazenar o valor de Pi, que não será alterado durante a execução do programa. O programa solicita ao usuário que insira o raio do círculo, calcula a área do círculo utilizando a fórmula PI * raio * raio e exibe o resultado na tela









