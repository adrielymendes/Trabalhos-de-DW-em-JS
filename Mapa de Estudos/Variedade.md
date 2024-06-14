# Variedade 
O termo "variedade" pode ser utilizado em diferentes contextos para se referir a uma diversidade ou uma gama de opções ou elementos diferentes.características ou tipos diferentes de dados.

# Exemplo 
```js 
// Declarando diferentes tipos de dados
let numero = 42; // Tipo number
let texto = "Olá, mundo!"; // Tipo string
let estaChovendo = true; // Tipo boolean
let listaDeCompras = ["maçã", "banana", "laranja"]; // Tipo array
let pessoa = { nome: "João", idade: 30 }; // Tipo objeto

// Exibindo os valores das variáveis
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Está chovendo:", estaChovendo);
console.log("Lista de compras:", listaDeCompras);
console.log("Pessoa:", pessoa);

```
# Exercicio 
Desenvolva um sistema de registro de produtos para um pequeno mercado. Crie um objeto chamado produto que represente um produto disponível para venda no mercado.
```JS
// Registro do produto
let produto = {
    nome: "Arroz",
    preco: 5.99,
    disponivel: true,
    categorias: ["alimentos", "grãos", "culinária"]
};

// Exibição das informações do produto
console.log("Nome do produto:", produto.nome);
console.log("Preço do produto:", produto.preco.toFixed(2));
console.log("Disponível para compra:", produto.disponivel ? "Sim" : "Não");
console.log("Categorias do produto:", produto.categorias);

```