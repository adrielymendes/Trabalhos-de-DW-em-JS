const inputTexto= document.querySelector("[input-texto]")
const btnContar= document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoContagem = "Caracteres"

function handleBtnContar(evento){
    if(tipoContagem == "Caracteres"){
        evento.target.innerText = 'Contar Palavras'
        tipoContagem = "palavra"
    }else{
        evento.target.innerText ='Contar Caracteres'
        tipoContagem = "Caracteres"
    }  
}

const handleInputTexto =(evento)=>{
    console.log(evento.target.value)
}
btnContar.addEventListener("click", handleBtnContar) // generica 
//btnContar.onlick= handleBtnContar // especifica para click on qual evento disponiveis 
inputTexto.addEventListener("input",handleInputTexto)