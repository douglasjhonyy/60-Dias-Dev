console.log("🚀 Task Manager Pro - Iniciando...");

// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

let tarefas = [];
let tarefaEditando = null;
let filtroAtual = 'todas';
let categoriaAtual = 'todas';
let ordenacaoAtual = 'data-desc';
let acaoConfirmada = null;

// ========================================
// ELEMENTOS DO DOM
// ========================================

// Formulário
const formTarefa = document.getElementById('form-tarefa');
const inputTitulo = document.getElementById('input-titulo');
const inputDescricao = document.getElementById('input-descricao');
const inputCategoria = document.getElementById('input-categoria');
const inputPrioridade = document.getElementById('input-prioridade');
const btnCancelar = document.getElementById('btn-cancelar');

// Controles
const inputBusca = document.getElementById('input-busca');
const selectOrdenacao = document.getElementById('select-ordenacao');
const btnLimparConcluidas = document.getElementById('btn-limpar-concluidas');

// Lista
const listaTarefas = document.getElementById('lista-tarefas');

// Botões de filtro
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryButtons = document.querySelectorAll('.category-btn');

// Estatísticas
const totalTarefasEl = document.getElementById('total-tarefas');
const tarefasConcluidasEl = document.getElementById('tarefas-concluidas');
const tarefasPendentesEl = document.getElementById('tarefas-pendentes');
const tarefasUrgentesEl = document.getElementById('tarefas-urgentes');

// Modal
const modalConfirmacao = document.getElementById('modal-confirmacao');
const modalTitulo = document.getElementById('modal-titulo');
const modalMensagem = document.getElementById('modal-mensagem');
const modalConfirmar = document.getElementById('modal-confirmar');
const modalCancelar = document.getElementById('modal-cancelar');

// ========================================
// FUNÇÕES DE CRUD
// ========================================

/**
 * Adicionar nova tarefa
 */
function adicionarTarefa(titulo, descricao, categoria, prioridade) {
    const novaTarefa = {
        id: Date.now(),
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        prioridade: prioridade,
        concluida: false,
        dataCriacao: new Date().toISOString()
    };
    
    tarefas.push(novaTarefa);
    salvarTarefas();
    
    console.log('✅ Tarefa adicionada:', novaTarefa.titulo);
    return novaTarefa;
}

/**
 * Editar tarefa
 */
function editarTarefa(id, dados) {
    const index = tarefas.findIndex(t => t.id === id);
    
    if (index !== -1) {
        tarefas[index].titulo = dados.titulo;
        tarefas[index].descricao = dados.descricao;
        tarefas[index].categoria = dados.categoria;
        tarefas[index].prioridade = dados.prioridade;
        
        salvarTarefas();
        console.log('✏️ Tarefa editada:', tarefas[index].titulo);
        return true;
    }
    
    return false;
}

/**
 * Deletar tarefa
 */
function deletarTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id);
    
    if (index !== -1) {
        const tarefaDeletada = tarefas.splice(index, 1)[0];
        salvarTarefas();
        console.log('🗑️ Tarefa deletada:', tarefaDeletada.titulo);
        return true;
    }
    
    return false;
}

/**
 * Toggle concluída
 */
function toggleConcluida(id) {
    const tarefa = tarefas.find(t => t.id === id);
    
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        salvarTarefas();
        renderizarTarefas();
        console.log(tarefa.concluida ? '✅ Concluída:' : '⏳ Reaberta:', tarefa.titulo);
    }
}

// ========================================
// LOCALSTORAGE
// ========================================

/**
 * Salvar no localStorage
 */
function salvarTarefas() {
    try {
        localStorage.setItem('taskManagerTarefas', JSON.stringify(tarefas));
        console.log('💾 Tarefas salvas');
    } catch (error) {
        console.error('❌ Erro ao salvar:', error);
        alert('Erro ao salvar as tarefas!');
    }
}

/**
 * Carregar do localStorage
 */
function carregarTarefas() {
    try {
        const tarefasSalvas = localStorage.getItem('taskManagerTarefas');
        
        if (tarefasSalvas) {
            tarefas = JSON.parse(tarefasSalvas);
            console.log('📥 Tarefas carregadas:', tarefas.length);
        } else {
            console.log('📭 Nenhuma tarefa salva');
        }
    } catch (error) {
        console.error('❌ Erro ao carregar:', error);
        tarefas = [];
    }
}

// ========================================
// RENDERIZAÇÃO
// ========================================

/**
 * Renderizar lista de tarefas
 */
function renderizarTarefas() {
    console.log('🔄 Renderizando tarefas...');
    
    // Filtrar
    let tarefasFiltradas = filtrarTarefas();
    
    // Ordenar
    tarefasFiltradas = ordenarTarefas(tarefasFiltradas);
    
    // Limpar lista
    listaTarefas.innerHTML = '';
    
    // Verificar vazio
    if (tarefasFiltradas.length === 0) {
        mostrarEstadoVazio();
        atualizarEstatisticas();
        return;
    }
    
    // Renderizar cada tarefa
    tarefasFiltradas.forEach(tarefa => {
        const elemento = criarElementoTarefa(tarefa);
        listaTarefas.appendChild(elemento);
    });
    
    // Atualizar estatísticas
    atualizarEstatisticas();
    
    console.log('✅ Renderizado:', tarefasFiltradas.length, 'tarefas');
}

/**
 * Criar elemento HTML da tarefa
 */
function criarElementoTarefa(tarefa) {
    const div = document.createElement('div');
    div.className = `task-item ${tarefa.concluida ? 'concluida' : ''}`;
    div.dataset.id = tarefa.id;
    
    // Ícones
    const iconesCategoria = {
        pessoal: '🏠',
        trabalho: '💼',
        estudos: '📚',
        saude: '💪',
        lazer: '🎮'
    };
    
    // Data formatada
    const data = new Date(tarefa.dataCriacao);
    const dataFormatada = data.toLocaleDateString('pt-BR') + ' às ' + data.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});
    
    // Montar HTML
    div.innerHTML = `
        <input 
            type="checkbox" 
            class="task-checkbox" 
            ${tarefa.concluida ? 'checked' : ''}
        >
        
        <div class="task-content">
            <div class="task-header">
                <span class="task-titulo">${escapeHtml(tarefa.titulo)}</span>
                <span class="task-badge badge-categoria">
                    ${iconesCategoria[tarefa.categoria]} ${tarefa.categoria}
                </span>
                <span class="task-badge badge-prioridade ${tarefa.prioridade}">
                    ${tarefa.prioridade}
                </span>
            </div>
            
            ${tarefa.descricao ? `<div class="task-descricao">${escapeHtml(tarefa.descricao)}</div>` : ''}
            
            <div class="task-meta">
                📅 ${dataFormatada}
            </div>
        </div>
        
        <div class="task-actions">
            <button class="btn-editar">✏️ Editar</button>
            <button class="btn-deletar">🗑️ Deletar</button>
        </div>
    `;
    
    // Adicionar eventos
    const checkbox = div.querySelector('.task-checkbox');
    const btnEditar = div.querySelector('.btn-editar');
    const btnDeletar = div.querySelector('.btn-deletar');
    
    checkbox.addEventListener('change', () => toggleConcluida(tarefa.id));
    btnEditar.addEventListener('click', () => prepararEdicao(tarefa.id));
    btnDeletar.addEventListener('click', () => confirmarDeletar(tarefa.id));
    
    return div;
}

/**
 * Escape HTML para prevenir XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Mostrar estado vazio
 */
function mostrarEstadoVazio() {
    listaTarefas.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📭</div>
            <h3>Nenhuma tarefa encontrada</h3>
            <p>Adicione uma nova tarefa para começar!</p>
        </div>
    `;
}

// ========================================
// FILTROS E ORDENAÇÃO
// ========================================

/**
 * Filtrar tarefas
 */
function filtrarTarefas() {
    let resultado = [...tarefas];
    
    // Filtro por status
    if (filtroAtual === 'ativas') {
        resultado = resultado.filter(t => !t.concluida);
    } else if (filtroAtual === 'concluidas') {
        resultado = resultado.filter(t => t.concluida);
    }
    
    // Filtro por categoria
    if (categoriaAtual !== 'todas') {
        resultado = resultado.filter(t => t.categoria === categoriaAtual);
    }
    
    // Filtro por busca
    const termoBusca = inputBusca.value.trim().toLowerCase();
    if (termoBusca) {
        resultado = resultado.filter(t => 
            t.titulo.toLowerCase().includes(termoBusca) ||
            t.descricao.toLowerCase().includes(termoBusca)
        );
    }
    
    return resultado;
}

/**
 * Ordenar tarefas
 */
function ordenarTarefas(tarefasArray) {
    const copia = [...tarefasArray];
    
    switch (ordenacaoAtual) {
        case 'data-desc':
            return copia.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));
        
        case 'data-asc':
            return copia.sort((a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao));
        
        case 'prioridade':
            const prioridades = { alta: 3, media: 2, baixa: 1 };
            return copia.sort((a, b) => {
                const prioA = prioridades[a.prioridade] || 0;
                const prioB = prioridades[b.prioridade] || 0;
                return prioB - prioA;
            });
        
        case 'alfabetica':
            return copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
        
        default:
            return copia;
    }
}

// ========================================
// ESTATÍSTICAS
// ========================================

/**
 * Atualizar estatísticas
 */
function atualizarEstatisticas() {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    const urgentes = tarefas.filter(t => t.prioridade === 'alta' && !t.concluida).length;
    
    totalTarefasEl.textContent = total;
    tarefasConcluidasEl.textContent = concluidas;
    tarefasPendentesEl.textContent = pendentes;
    tarefasUrgentesEl.textContent = urgentes;
}

// ========================================
// FORMULÁRIO
// ========================================

/**
 * Submit do formulário
 */
formTarefa.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titulo = inputTitulo.value.trim();
    const descricao = inputDescricao.value.trim();
    const categoria = inputCategoria.value;
    const prioridade = inputPrioridade.value;
    
    // Validação
    if (!titulo) {
        alert('⚠️ O título é obrigatório!');
        inputTitulo.focus();
        return;
    }
    
    if (tarefaEditando !== null) {
        // EDITAR
        editarTarefa(tarefaEditando, { titulo, descricao, categoria, prioridade });
        tarefaEditando = null;
        btnCancelar.style.display = 'none';
        
        const btnSubmit = formTarefa.querySelector('button[type="submit"]');
        btnSubmit.textContent = '➕ Adicionar Tarefa';
    } else {
        // ADICIONAR
        adicionarTarefa(titulo, descricao, categoria, prioridade);
    }
    
    // Limpar e renderizar
    formTarefa.reset();
    renderizarTarefas();
    inputTitulo.focus();
});

/**
 * Cancelar edição
 */
btnCancelar.addEventListener('click', () => {
    tarefaEditando = null;
    formTarefa.reset();
    btnCancelar.style.display = 'none';
    
    const btnSubmit = formTarefa.querySelector('button[type="submit"]');
    btnSubmit.textContent = '➕ Adicionar Tarefa';
});

// ========================================
// EDIÇÃO
// ========================================

/**
 * Preparar edição
 */
function prepararEdicao(id) {
    const tarefa = tarefas.find(t => t.id === id);
    
    if (!tarefa) {
        console.error('Tarefa não encontrada:', id);
        return;
    }
    
    tarefaEditando = id;
    
    inputTitulo.value = tarefa.titulo;
    inputDescricao.value = tarefa.descricao;
    inputCategoria.value = tarefa.categoria;
    inputPrioridade.value = tarefa.prioridade;
    
    const btnSubmit = formTarefa.querySelector('button[type="submit"]');
    btnSubmit.textContent = '💾 Salvar Alterações';
    btnCancelar.style.display = 'inline-block';
    
    // Scroll suave para o formulário
    formTarefa.scrollIntoView({ behavior: 'smooth', block: 'start' });
    inputTitulo.focus();
}

// ========================================
// MODAL
// ========================================

/**
 * Confirmar deleção
 */
function confirmarDeletar(id) {
    const tarefa = tarefas.find(t => t.id === id);
    
    if (!tarefa) return;
    
    modalTitulo.textContent = '🗑️ Deletar Tarefa';
    modalMensagem.textContent = `Tem certeza que deseja deletar "${tarefa.titulo}"?`;
    
    acaoConfirmada = () => {
        deletarTarefa(id);
        renderizarTarefas();
        fecharModal();
    };
    
    abrirModal();
}

/**
 * Abrir modal
 */
function abrirModal() {
    modalConfirmacao.classList.add('active');
}

/**
 * Fechar modal
 */
function fecharModal() {
    modalConfirmacao.classList.remove('active');
    acaoConfirmada = null;
}

// Eventos do modal
modalConfirmar.addEventListener('click', () => {
    if (acaoConfirmada) {
        acaoConfirmada();
    }
});

modalCancelar.addEventListener('click', fecharModal);

modalConfirmacao.addEventListener('click', (e) => {
    if (e.target === modalConfirmacao) {
        fecharModal();
    }
});

// ========================================
// FILTROS
// ========================================

/**
 * Filtros de status
 */
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtroAtual = btn.dataset.filter;
        renderizarTarefas();
    });
});

/**
 * Filtros de categoria
 */
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        categoriaAtual = btn.dataset.categoria;
        renderizarTarefas();
    });
});

/**
 * Busca
 */
inputBusca.addEventListener('input', () => {
    renderizarTarefas();
});

/**
 * Ordenação
 */
selectOrdenacao.addEventListener('change', () => {
    ordenacaoAtual = selectOrdenacao.value;
    renderizarTarefas();
});

/**
 * Limpar concluídas
 */
btnLimparConcluidas.addEventListener('click', () => {
    const tarefasConcluidas = tarefas.filter(t => t.concluida);
    
    if (tarefasConcluidas.length === 0) {
        alert('Não há tarefas concluídas para limpar!');
        return;
    }
    
    modalTitulo.textContent = '🗑️ Limpar Concluídas';
    modalMensagem.textContent = `Deseja deletar ${tarefasConcluidas.length} tarefa(s) concluída(s)?`;
    
    acaoConfirmada = () => {
        tarefas = tarefas.filter(t => !t.concluida);
        salvarTarefas();
        renderizarTarefas();
        fecharModal();
        console.log('🗑️ Tarefas concluídas limpas');
    };
    
    abrirModal();
});

// ========================================
// INICIALIZAÇÃO
// ========================================

/**
 * Inicializar aplicação
 */
function inicializar() {
    console.log('🔧 Inicializando Task Manager Pro...');
    
    // Carregar tarefas
    carregarTarefas();
    
    // Renderizar
    renderizarTarefas();
    
    // Focar no input
    inputTitulo.focus();
    
    console.log('✅ Task Manager Pro inicializado!');
    console.log('📊 Total de tarefas:', tarefas.length);
}

// ========================================
// EXECUTAR INICIALIZAÇÃO
// ========================================

// Garantir que o DOM está carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

// Log final
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ TASK MANAGER PRO - PRONTO!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');