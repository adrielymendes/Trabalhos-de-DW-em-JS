
function funcaoAssincrona(sucesso = true){
    //console.log("funcaoAssincrona")
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if(sucesso)
                resolve("Operação concluída com sucesso ")
            else
                 reject("Erro na Operação")

        },2000)

        
    });
}

funcaoAssincrona()
    .then((resposta =>{
        console.log("Deu Certo")
        console.log("Resultado:"+ resposta)
    }))
    .catch((erro =>{ 
        console.log("Deu ruim")
        console.log("Resultado:"+ erro)
    }))
console.log("Fim")