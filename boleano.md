# Boleano 
Em JavaScript, booleano é um tipo de dado que pode ter apenas dois valores: true ou false. Ele é usado para representar um estado lógico, onde true representa a verdade e false representa a falsidade de uma condição.

# Exemplo

```js 
let estaChovendo = true;
let temSol = false;

if (estaChovendo) {
    console.log("É melhor levar um guarda-chuva!");
} else {
    console.log("Não se esqueça do protetor solar!");
}

if (estaChovendo && !temSol) {
    console.log("Está chovendo, mas não está ensolarado.");
}

```
# Exercicio 
Desenvolva um sistema de verificação de idade para um site de conteúdo restrito para maiores de idade. Crie uma função chamada verificarIdade que recebe a idade de um usuário como argumento e retorna true se o usuário tiver 18 anos ou mais, e false caso contrário.

```js 
function verificarIdade(idade) {
    return idade >= 18;
}
console.log(verificarIdade(20)); 
console.log(verificarIdade(16)); 
console.log(verificarIdade(18)); 

```
