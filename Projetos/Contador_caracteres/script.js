const inputTexto= document.querySelector("[input-texto]")
const btnContar= document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoContagem = "Caracteres";// altera entre contagem de caracteres e palavras 

function handleBtnContar(evento){
    if(tipoContagem == "Caracteres"){
        evento.target.innerText = 'Contar Caracteres ';
        tipoContagem = "Palavras";
      
    }else{
        evento.target.innerText ='Contar Palavras';
        tipoContagem = "Caracteres";
    }  
    handleInputTexto();//atualiza exibição do contador 
}

function handleInputTexto(evento){
    const texto =inputTexto.value // texto armazena o valor atual do elemento inputexto.inputtexto.value retorna o valor atual do input do texto
    if(tipoContagem == "Caracteres"){
        divContador.innerText = texto.length + ' caracteres'

    }else{
        const countWords = texto.trim().split(" ").filter(Boolean);
        divContador.innerText = countWords.length + " palavras";       
    }//texto.trim() retorna o texto sem espaços em branco no início e no final.
    //texto.trim().split(" ") divide o texto em um array de palavras, onde cada palavra é um elemento do array.filter(Boolean) remove todos os elementos vazios do array resultante de texto.trim().split(" ").
   
 }

btnContar.addEventListener("click", handleBtnContar) // generica 
//btnContar.onlick= handleBtnContar // especifica para click on qual evento disponiveis 
inputTexto.addEventListener("input",handleInputTexto)
