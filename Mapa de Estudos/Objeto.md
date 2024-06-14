# OBJETO 
Um objeto, em programação, é uma estrutura de dados que agrupa valores (também conhecidos como propriedades) e funcionalidades (métodos) relacionados. Essa estrutura de dados permite representar entidades do mundo real de forma organizada e manipular seus atributos e comportamentos de maneira eficiente.

# Exemplo 
```js
// Definição de um objeto representando um carro
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "prata",
    preco: 45000,
    // Método para exibir informações do carro
    exibirInfo: function() {
        return "Este é um " + this.marca + " " + this.modelo + " do ano " + this.ano + " na cor " + this.cor + ".";
    }
};

// Acesso às propriedades do objeto e chamada do método
console.log(carro.marca); // Saída: Toyota
console.log(carro.exibirInfo()); // Saída: Este é um Toyota Corolla do ano 2020 na cor prata.

```
# Exercicio 
Desenvolva um sistema de gerenciamento de produtos para uma loja online. Crie um objeto chamado produto que represente um produto disponível para venda na loja.
```JS
// Cadastro do produto
let produto = {
    nome: "Smartphone",
    preco: 999.99,
    descricao: "Um smartphone de última geração com câmera de alta resolução.",
    disponivel: true
};

// Exibição das informações do produto
console.log("Nome do produto:", produto.nome);
console.log("Preço do produto:", produto.preco.toFixed(2));
console.log("Descrição do produto:", produto.descricao);
console.log("Disponível para compra:", produto.disponivel ? "Sim" : "Não");

```
# Exercicio 
Desenvolva um sistema de verificação de idade para um site de conteúdo restrito para maiores de idade. Crie uma função chamada verificarIdade que recebe a idade de um usuário como argumento e retorna true se o usuário tiver 18 anos ou mais, e false caso contrário.
```js
function verificarIdade(idade) {
    return idade >= 18;
}

```