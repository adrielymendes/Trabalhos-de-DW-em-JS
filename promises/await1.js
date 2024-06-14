
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

 async function executafuncaoAssincrona(){
    try{
        const resposta = await funcaoAssincrona(false)
        console.log(resposta)

    } catch(erro){
        console.log("Deu ruim. Tente novamente mais tarde ")
        console.log(erro)

        
    }
    
   
}


executafuncaoAssincrona()

