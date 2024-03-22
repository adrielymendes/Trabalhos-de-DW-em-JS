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
