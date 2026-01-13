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

