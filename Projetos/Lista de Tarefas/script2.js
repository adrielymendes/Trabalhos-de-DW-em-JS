const criarTarefa = document.querySelector(".criar button");
const inputTarefa = document.querySelector(".criar input");
const listaDeTarefas = document.querySelector(".container");
const contadorCriadas = document.querySelector(".criadas.num1");
const contadorConcluidas = document.querySelector(".concluidas.num2");

let tarefas = [];

criarTarefa.addEventListener("click", () => {
  const novaTarefa = inputTarefa.value.trim();

  if (novaTarefa!== "") {
    const tarefa = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false,
    };

    tarefas.push(tarefa);
    renderizarListaDeTarefas();
    inputTarefa.value = "";
    atualizarContadores();
  }
});

function renderizarListaDeTarefas() {
  listaDeTarefas.innerHTML = "";

  tarefas.forEach((tarefa) => {
    const campoContainer = document.createElement("div");
    campoContainer.classList.add("caixa-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluida;
    checkbox.addEventListener("change", () => {
      tarefa.concluida = checkbox.checked;
      atualizarContadores();
    });

    const textoTarefa = document.createElement("p");
    textoTarefa.textContent = tarefa.texto;
    textoTarefa.id = "tarefas";

    const removerTarefa = document.createElement("img");
    removerTarefa.src = "./logo/lixeira.svg";
    removerTarefa.alt = "";
    removerTarefa.addEventListener("click", () => {
      removerTarefaDaLista(tarefa.id);
    });

    campoContainer.appendChild(checkbox);
    campoContainer.appendChild(textoTarefa);
    campoContainer.appendChild(removerTarefa);
    listaDeTarefas.appendChild(campoContainer);
  });
}

// // Remove uma tarefa da lista
// function removerTarefaDaLista(id) {
//   tarefas = tarefas.filter((tarefa) => tarefa.id!== id);
//   renderizarListaDeTarefas();
//   atualizarContadores();
// }

// Atualiza os contadores de tarefas criadas e concluídas
function atualizarContadores() {
  contadorCriadas.textContent = tarefas.length;
  contadorConcluidas.textContent = `${tarefas.filter((tarefa) => tarefa.concluida).length} de ${tarefas.length};`
}

// Renderiza a lista de tarefas inicial
renderizarListaDeTarefas();