## Escopo 
"Escopo" se refere à área de um programa onde uma determinada variável é visível e pode ser acessada. O escopo determina onde uma variável pode ser usada e se sua existência é reconhecida em diferentes partes do código.

Existem vários tipos de escopo em programação, os mais comuns são:

- Escopo Global
- Escopo de Função
- Escopo de Bloco

### Exemplo
``` js
# Variável global
global_var = 10

def minha_funcao():
    # Variável local à função
    local_var = 5
    print("Dentro da função:")
    print("Variável global:", global_var)
    print("Variável local:", local_var)
    
    def minha_funcao_interna():
        # Variável local à função interna
        inner_local_var = 7
        print("Dentro da função interna:")
        print("Variável global:", global_var)
        print("Variável local:", local_var)
        print("Variável local interna:", inner_local_var)
    
    # Chamando a função interna
    minha_funcao_interna()

# Chamando a função principal
minha_funcao()

# Tentando acessar a variável local interna fora da função interna (vai resultar em um erro)
# print("Fora da função interna:")
# print("Variável local interna:", inner_local_var)

```
##
Exercicio 
Desenvolva um sistema de controle de estoque para uma loja. O sistema precisa calcular o preço total de uma compra e aplicar descontos com base no perfil do cliente.

```JS

function calcularPrecoTotal(quantidade, precoUnitario) {
    
    var desconto = 0.05;

    return quantidade * precoUnitario;
}


var tipoClientePadrao = "padrao";
var tipoClienteVIP = "VIP";

function aplicarDesconto(total, tipoCliente) {
    if (tipoCliente === tipoClientePadrao) {
        total -= total * 0.05;
    } else if (tipoCliente === tipoClienteVIP) {
        total -= total * 0.10;
    }
   
    return total;
}

var precoTotalCompra;


precoTotalCompra = calcularPrecoTotal(5, 10);


precoTotalCompra = aplicarDesconto(precoTotalCompra, tipoClientePadrao);

console.log("Preço total da compra com desconto:", precoTotalCompra.toFixed(2));

       
        
```

## Escopo Global 
Escopo global em programação se refere à área do código onde uma variável é acessível em qualquer lugar do programa. As variáveis declaradas fora de qualquer função ou bloco de código têm escopo global e podem ser acessadas em qualquer parte do código.

Quando uma variável é declarada no escopo global, ela é visível para todas as funções e blocos de código dentro do programa. 
 
# exemplo 
```js 
// Variável global
var mensagem = "Olá, mundo!";

// Função que acessa e modifica a variável global
function exibirMensagem() {
    console.log(mensagem); // Acessando a variável global
    mensagem = "Olá, todos!"; // Modificando a variável global
}

// Chamando a função
exibirMensagem(); // Saída: "Olá, mundo!"
console.log(mensagem); // Saída: "Olá, todos!"

``` 
### Exercicio
Desenvolva um sistema de registro de funcionários para uma empresa. O sistema precisa armazenar o nome, a idade e o cargo de cada funcionário. Além disso, ele precisa ser capaz de adicionar novos funcionários e exibir a lista de funcionários registrados.
```JS

var funcionarios = [];


function adicionarFuncionario(nome, idade, cargo) {
    var novoFuncionario = {
        nome: nome,
        idade: idade,
        cargo: cargo
    };
    funcionarios.push(novoFuncionario);
}

function exibirFuncionarios() {
    console.log("Lista de Funcionários:");
    funcionarios.forEach(function(funcionario) {
        console.log("Nome:", funcionario.nome, "| Idade:", funcionario.idade, "| Cargo:", funcionario.cargo);
    });
}
adicionarFuncionario("João", 30, "Desenvolvedor");
adicionarFuncionario("Maria", 25, "Designer");
adicionarFuncionario("Pedro", 35, "Gerente");

exibirFuncionarios();

```
## Escopo de Função
O escopo de função se refere à área de um programa onde as variáveis declaradas dentro de uma função são visíveis e podem ser acessadas. as variáveis declaradas dentro de uma função têm escopo local e só podem ser acessadas dentro dessa função ou de funções aninhadas dentro dela.

Quando uma variável é declarada dentro de uma função, ela só é acessível dentro dessa função, independentemente de onde ela é declarada.

## Exemplo
``` js
function minhaFuncao() {
    var mensagem = "Olá, mundo!"; // variável com escopo de função

    console.log(mensagem); // Saída: "Olá, mundo!"
}

minhaFuncao();

// Tentar acessar a variável mensagem fora da função resultará em um erro
console.log(mensagem); // Erro: mensagem is not defined

```
## Exemplo exercicio 
crie uma calculadora básica e precisa implementar uma função para calcular a soma de dois números fornecidos como argumentos. No entanto, a função deve ser definida dentro de outra função chamada criarCalculadora, e só pode ser acessada dentro dela.

```js
function criarCalculadora() {
    function soma(a, b) {
        return a + b;
    }

    return soma;
}

const calculadora = criarCalculadora();
console.log(calculadora(3, 5)); 

```
##  Escopo de Bloco

O escopo de bloco refere-se à área dentro de um par de chaves {} em que uma variável é visível e pode ser acessada. Isso significa que as variáveis declaradas dentro de um bloco de código delimitado por chaves {} são acessíveis apenas dentro desse bloco e não podem ser acessadas fora dele.

# Exemplo 
```js 
// Escopo de bloco
{
    let mensagem = "Olá";
    console.log(mensagem); // Saída: "Olá"
}

// A variável mensagem não é acessível aqui fora do bloco
console.log(mensagem); // Erro: mensagem is not defined

```

# Exercicio 
Desenvolva um sistema de controle de estoque para uma loja. crie uma função chamada verificarEstoque que recebe um parâmetro produto e verifica se há estoque suficiente desse produto. Se houver estoque suficiente (quantidade maior que zero), a função deve exibir a mensagem "Produto disponível". Caso contrário, a função deve exibir a mensagem "Produto esgotado".
```` js
function verificarEstoque(produto) {
    // Suponha que o estoque seja obtido de algum lugar
    // Aqui simulamos o estoque apenas para o exemplo
    if (produto === "camisa") {
        {
            let estoque = 5;
            if (estoque > 0) {
                console.log("Produto disponível");
            } else {
                console.log("Produto esgotado");
            }
        }
    } else {
        console.log("Produto não encontrado");
    }
}

// Exemplo de Uso
verificarEstoque("camisa"); // Saída: Produto disponível
verificarEstoque("sapato"); // Saída: Produto esgotado

```


