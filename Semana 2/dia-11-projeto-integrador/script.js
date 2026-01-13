console.log("🚀 Task Manager Pro - Carregado!");

//VARIÁVEIS GLOBAIS

let tarefas = [];
let tarefaEditando = null;
let filtroAtual = 'todas';
let categoriaAtual = 'todas';
let ordenacaoAtual = 'data-desc';

//Elementos DOM

const formTarefa = document.getElementById('form-tarefa');
const inputTitulo = document.getElementById('input-titulo');
const inputDescricao = document.getElementById('input-descricao');
const inputCategoria = document.getElementById('input-categoria');
const inputPrioridade = document.getElementById('input-prioridade');
const btnCancelar = document.getElementById('btn-cancelar');

const inputBusca = document.getElementById('input-busca');
const selectOrdenacao = document.getElementById('select-ordenacao');
const btnLimparConcluidas = document.getElementById('btn-limpar-concluidas');

const listaTarefas = document.getElementById('lista-tarefas');

const filterButtons = document.querySelectorAll('.filter-btn');
const categoryButtons = document.querySelectorAll('.category-btn');

const totalTarefasEl = document.getElementById('total-tarefas');
const tarefasConcluidasEl = document.getElementById('tarefas-concluidas');
const tarefasPendentesEl = document.getElementById('tarefas-pendentes');
const tarefasUrgentesEl = document.getElementById('tarefas-urgentes');

const modalConfirmacao = document.getElementById('modal-confirmacao');
const modalTitulo = document.getElementById('modal-titulo');
const modalMensagem = document.getElementById('modal-mensagem');
const modalConfirmar = document.getElementById('modal-confirmar');
const modalCancelar = document.getElementById('modal-cancelar');

// Inicialização

function inicializar() {
    carregarTarefas();
    renderizarTarefas();
    atualizarEstatisticas();
    
    console.log('✅ Sistema inicializado');
    console.log(`📊 Total de tarefas: ${tarefas.length}`);
}

//CRUD - CREATE, READ, UPDATE, DELETE

/**
 * Adicionar nova tarefa
 */
function adicionarTarefa(titulo, descricao, categoria, prioridade) {
    const novaTarefa = {
        id: Date.now(),
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        categoria: categoria,
        prioridade: prioridade,
        concluida: false,
        dataCriacao: new Date().toISOString(),
        dataModificacao: new Date().toISOString()
    };
    
    tarefas.push(novaTarefa);
    salvarTarefas();
    
    console.log('✅ Tarefa adicionada:', novaTarefa.titulo);
}

/**
 * Editar tarefa existente
 */
function editarTarefa(id, dados) {
    const tarefa = tarefas.find(t => t.id === id);
    
    if (tarefa) {
        tarefa.titulo = dados.titulo.trim();
        tarefa.descricao = dados.descricao.trim();
        tarefa.categoria = dados.categoria;
        tarefa.prioridade = dados.prioridade;
        tarefa.dataModificacao = new Date().toISOString();
        
        salvarTarefas();
        
        console.log('✏️ Tarefa editada:', tarefa.titulo);
    }
}

/**
 * Deletar tarefa
 */
function deletarTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id);
    
    if (index !== -1) {
        const tarefaDeletada = tarefas[index];
        tarefas.splice(index, 1);
        salvarTarefas();
        
        console.log('🗑️ Tarefa deletada:', tarefaDeletada.titulo);
    }
}
/**
 * Toggle status concluída
 */
function toggleConcluida(id) {
    const tarefa = tarefas.find(t => t.id === id);
    
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        tarefa.dataModificacao = new Date().toISOString();
        salvarTarefas();
        
        console.log(tarefa.concluida ? '✅ Concluída:' : '⏳ Reaberta:', tarefa.titulo);
    }
}

//Localstorage 