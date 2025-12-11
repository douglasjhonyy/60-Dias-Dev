// ========================================
// PARTE 2: JSON
// ========================================

console.log("=== JSON ===");

// OBJETO JAVASCRIPT
const usuario = {
    id: 1,
    nome: "Jhony",
    email: "jhony@email.com",
    ativo: true,
    tecnologias: ["HTML", "CSS", "JavaScript"]
};

// 1. JSON.stringify() - OBJETO → STRING (JSON)
const usuarioJSON = JSON.stringify(usuario);
console.log("Objeto original:", usuario);
console.log("JSON (string):", usuarioJSON);
console.log("Tipo:", typeof usuarioJSON);

// JSON.stringify com formatação (mais legível)
const usuarioJSONFormatado = JSON.stringify(usuario, null, 2);
console.log("JSON formatado:\n", usuarioJSONFormatado);

// 2. JSON.parse() - STRING (JSON) → OBJETO
const jsonString = '{"nome":"Maria","idade":25,"cidade":"São Paulo"}';
const objetoRecuperado = JSON.parse(jsonString);
console.log("String JSON:", jsonString);
console.log("Objeto recuperado:", objetoRecuperado);
console.log("Nome:", objetoRecuperado.nome);

// EXEMPLO PRÁTICO: Salvar array de objetos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Teclado", preco: 200 }
];

const produtosJSON = JSON.stringify(produtos);
console.log("Produtos em JSON:", produtosJSON);

const produtosRecuperados = JSON.parse(produtosJSON);
console.log("Produtos recuperados:", produtosRecuperados);

// SALVAR
localStorage.setItem('chave', 'valor');
localStorage.setItem('objeto', JSON.stringify(obj));

// RECUPERAR
const valor = localStorage.getItem('chave');
const obj = JSON.parse(localStorage.getItem('objeto'));

// REMOVER
localStorage.removeItem('chave');

// LIMPAR TUDO
localStorage.clear();

// VERIFICAR QUANTIDADE
localStorage.length;


// ========================================
// PARTE 4: INTERAÇÃO COM HTML
// ========================================

// ELEMENTOS - SEÇÃO OBJETOS
const btnPessoa = document.getElementById('btn-pessoa');
const btnCarro = document.getElementById('btn-carro');
const btnArrayObjetos = document.getElementById('btn-array-objetos');
const resultadoObjetos = document.getElementById('resultado-objetos');

// ELEMENTOS - SEÇÃO JSON
const btnStringify = document.getElementById('btn-stringify');
const btnParse = document.getElementById('btn-parse');
const btnExemplo = document.getElementById('btn-exemplo');
const resultadoJSON = document.getElementById('resultado-json');

// ELEMENTOS - SEÇÃO LOCALSTORAGE
const inputNome = document.getElementById('input-nome');
const btnSalvar = document.getElementById('btn-salvar');
const btnCarregar = document.getElementById('btn-carregar');
const btnLimparStorage = document.getElementById('btn-limpar-storage');
const resultadoStorage = document.getElementById('resultado-storage');

// ===== SEÇÃO 1: OBJETOS =====

btnPessoa.addEventListener('click', () => {
    const pessoa = {
        nome: "Jhony",
        idade: 30,
        cidade: "Carapicuíba",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    };
    
    resultadoObjetos.innerHTML = `
        <strong>📦 Objeto Pessoa:</strong><br><br>
        Nome: ${pessoa.nome}<br>
        Idade: ${pessoa.idade}<br>
        Cidade: ${pessoa.cidade}<br>
        Tecnologias: ${pessoa.tecnologias.join(', ')}
    `;
});

btnCarro.addEventListener('click', () => {
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2024,
        descricao: function() {
            return `${this.marca} ${this.modelo} ${this.ano}`;
        }
    };
    
    resultadoObjetos.innerHTML = `
        <strong>🚗 Objeto Carro:</strong><br><br>
        ${carro.descricao()}<br><br>
        <pre>${JSON.stringify(carro, null, 2)}</pre>
    `;
});

btnArrayObjetos.addEventListener('click', () => {
    const alunos = [
        { nome: "João", nota: 8.5 },
        { nome: "Maria", nota: 9.0 },
        { nome: "Pedro", nota: 6.0 }
    ];
    
    let html = '<strong>👥 Array de Objetos (Alunos):</strong><br><br>';
    alunos.forEach(aluno => {
        html += `${aluno.nome}: ${aluno.nota}<br>`;
    });
    
    resultadoObjetos.innerHTML = html;
});

// ===== SEÇÃO 2: JSON =====

btnStringify.addEventListener('click', () => {
    const objeto = {
        nome: "Jhony",
        idade: 30,
        ativo: true
    };
    
    const json = JSON.stringify(objeto, null, 2);
    
    resultadoJSON.innerHTML = `
        <strong>Objeto → JSON (stringify):</strong><br><br>
        <strong>Antes (objeto):</strong><br>
        ${JSON.stringify(objeto)}<br><br>
        <strong>Depois (JSON string):</strong><br>
        <pre>${json}</pre>
    `;
});

btnParse.addEventListener('click', () => {
    const jsonString = '{"nome":"Maria","idade":25,"cidade":"São Paulo"}';
    const objeto = JSON.parse(jsonString);
    
    resultadoJSON.innerHTML = `
        <strong>JSON → Objeto (parse):</strong><br><br>
        <strong>Antes (JSON string):</strong><br>
        ${jsonString}<br><br>
        <strong>Depois (objeto):</strong><br>
        Nome: ${objeto.nome}<br>
        Idade: ${objeto.idade}<br>
        Cidade: ${objeto.cidade}
    `;
});

btnExemplo.addEventListener('click', () => {
    const dados = {
        usuario: "jhony_dev",
        projetos: 8,
        tecnologias: ["HTML", "CSS", "JS"]
    };
    
    // Converter para JSON
    const json = JSON.stringify(dados);
    
    // Salvar no localStorage
    localStorage.setItem('meusDados', json);
    
    // Recuperar do localStorage
    const dadosRecuperados = JSON.parse(localStorage.getItem('meusDados'));
    
    resultadoJSON.innerHTML = `
        <strong>✅ Exemplo Completo (Objeto → JSON → LocalStorage → JSON → Objeto):</strong><br><br>
        <strong>Dados salvos e recuperados:</strong><br>
        Usuário: ${dadosRecuperados.usuario}<br>
        Projetos: ${dadosRecuperados.projetos}<br>
        Tecnologias: ${dadosRecuperados.tecnologias.join(', ')}
    `;
});

// ===== SEÇÃO 3: LOCALSTORAGE =====

btnSalvar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    
    if (nome === '') {
        resultadoStorage.textContent = '⚠️ Digite um nome!';
        return;
    }
    
    localStorage.setItem('nomeUsuario', nome);
    resultadoStorage.textContent = `✅ Nome "${nome}" salvo com sucesso!`;
    inputNome.value = '';
});

btnCarregar.addEventListener('click', () => {
    const nomeSalvo = localStorage.getItem('nomeUsuario');
    
    if (nomeSalvo) {
        resultadoStorage.textContent = `📥 Nome recuperado: ${nomeSalvo}`;
    } else {
        resultadoStorage.textContent = '❌ Nenhum nome salvo!';
    }
});

btnLimparStorage.addEventListener('click', () => {
    localStorage.removeItem('nomeUsuario');
    resultadoStorage.textContent = '🗑️ Storage limpo!';
});

// ===== SEÇÃO 1: OBJETOS =====

btnPessoa.addEventListener('click', () => {
    const pessoa = {
        nome: "Jhony",
        idade: 30,
        cidade: "Carapicuíba",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    };
    
    resultadoObjetos.innerHTML = `
        <strong>📦 Objeto Pessoa:</strong><br><br>
        Nome: ${pessoa.nome}<br>
        Idade: ${pessoa.idade}<br>
        Cidade: ${pessoa.cidade}<br>
        Tecnologias: ${pessoa.tecnologias.join(', ')}
    `;
});

btnCarro.addEventListener('click', () => {
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2024,
        descricao: function() {
            return `${this.marca} ${this.modelo} ${this.ano}`;
        }
    };
    
    resultadoObjetos.innerHTML = `
        <strong>🚗 Objeto Carro:</strong><br><br>
        ${carro.descricao()}<br><br>
        <pre>${JSON.stringify(carro, null, 2)}</pre>
    `;
});

btnArrayObjetos.addEventListener('click', () => {
    const alunos = [
        { nome: "João", nota: 8.5 },
        { nome: "Maria", nota: 9.0 },
        { nome: "Pedro", nota: 6.0 }
    ];
    
    let html = '<strong>👥 Array de Objetos (Alunos):</strong><br><br>';
    alunos.forEach(aluno => {
        html += `${aluno.nome}: ${aluno.nota}<br>`;
    });
    
    resultadoObjetos.innerHTML = html;
});

// ===== SEÇÃO 2: JSON =====

btnStringify.addEventListener('click', () => {
    const objeto = {
        nome: "Jhony",
        idade: 30,
        ativo: true
    };
    
    const json = JSON.stringify(objeto, null, 2);
    
    resultadoJSON.innerHTML = `
        <strong>Objeto → JSON (stringify):</strong><br><br>
        <strong>Antes (objeto):</strong><br>
        ${JSON.stringify(objeto)}<br><br>
        <strong>Depois (JSON string):</strong><br>
        <pre>${json}</pre>
    `;
});

btnParse.addEventListener('click', () => {
    const jsonString = '{"nome":"Maria","idade":25,"cidade":"São Paulo"}';
    const objeto = JSON.parse(jsonString);
    
    resultadoJSON.innerHTML = `
        <strong>JSON → Objeto (parse):</strong><br><br>
        <strong>Antes (JSON string):</strong><br>
        ${jsonString}<br><br>
        <strong>Depois (objeto):</strong><br>
        Nome: ${objeto.nome}<br>
        Idade: ${objeto.idade}<br>
        Cidade: ${objeto.cidade}
    `;
});

btnExemplo.addEventListener('click', () => {
    const dados = {
        usuario: "jhony_dev",
        projetos: 8,
        tecnologias: ["HTML", "CSS", "JS"]
    };
    
    // Converter para JSON
    const json = JSON.stringify(dados);
    
    // Salvar no localStorage
    localStorage.setItem('meusDados', json);
    
    // Recuperar do localStorage
    const dadosRecuperados = JSON.parse(localStorage.getItem('meusDados'));
    
    resultadoJSON.innerHTML = `
        <strong>✅ Exemplo Completo (Objeto → JSON → LocalStorage → JSON → Objeto):</strong><br><br>
        <strong>Dados salvos e recuperados:</strong><br>
        Usuário: ${dadosRecuperados.usuario}<br>
        Projetos: ${dadosRecuperados.projetos}<br>
        Tecnologias: ${dadosRecuperados.tecnologias.join(', ')}
    `;
});

// ===== SEÇÃO 3: LOCALSTORAGE =====

btnSalvar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    
    if (nome === '') {
        resultadoStorage.textContent = '⚠️ Digite um nome!';
        return;
    }
    
    localStorage.setItem('nomeUsuario', nome);
    resultadoStorage.textContent = `✅ Nome "${nome}" salvo com sucesso!`;
    inputNome.value = '';
});

btnCarregar.addEventListener('click', () => {
    const nomeSalvo = localStorage.getItem('nomeUsuario');
    
    if (nomeSalvo) {
        resultadoStorage.textContent = `📥 Nome recuperado: ${nomeSalvo}`;
    } else {
        resultadoStorage.textContent = '❌ Nenhum nome salvo!';
    }
});

btnLimparStorage.addEventListener('click', () => {
    localStorage.removeItem('nomeUsuario');
    resultadoStorage.textContent = '🗑️ Storage limpo!';
});

// ========================================
// PARTE 5: TO-DO LIST PROFISSIONAL
// ========================================

const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const btnLimparTodas = document.getElementById('btn-limpar-todas');
const totalTarefas = document.getElementById('total-tarefas');
const concluidas = document.getElementById('concluidas');
const pendentes = document.getElementById('pendentes');
const filterButtons = document.querySelectorAll('.filter-btn');

// Array de tarefas (cada tarefa é um objeto)
let tarefas = [];
let filtroAtual = 'todas';

// INICIALIZAR: Carregar tarefas do LocalStorage
function inicializar() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
    }
    
    renderizarTarefas();
}

// ADICIONAR TAREFA
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();
    
    if (textoTarefa === '') {
        alert('⚠️ Digite uma tarefa!');
        return;
    }
    
    // Criar objeto de tarefa
    const novaTarefa = {
        id: Date.now(), // ID único baseado em timestamp
        texto: textoTarefa,
        concluida: false,
        dataCriacao: new Date().toLocaleString('pt-BR')
    };
    
    // Adicionar ao array
    tarefas.push(novaTarefa);
    
    // Salvar no LocalStorage
    salvarNoStorage();
    
    // Limpar input
    inputTarefa.value = '';
    
    // Atualizar lista
    renderizarTarefas();
}

// RENDERIZAR TAREFAS
function renderizarTarefas() {
    // Limpar lista
    listaTarefas.innerHTML = '';
    
    // Filtrar tarefas
    let tarefasFiltradas = tarefas;
    
    if (filtroAtual === 'pendentes') {
        tarefasFiltradas = tarefas.filter(t => !t.concluida);
    } else if (filtroAtual === 'concluidas') {
        tarefasFiltradas = tarefas.filter(t => t.concluida);
    }
    
    // Renderizar cada tarefa
    tarefasFiltradas.forEach(tarefa => {
        const li = document.createElement('li');
        if (tarefa.concluida) {
            li.classList.add('concluida');
        }
        
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox-tarefa" 
                ${tarefa.concluida ? 'checked' : ''}
                onchange="toggleTarefa(${tarefa.id})"
            >
            <span class="texto-tarefa">${tarefa.texto}</span>
            <button class="btn-deletar" onclick="deletarTarefa(${tarefa.id})">Deletar ❌</button>
        `;
        
        listaTarefas.appendChild(li);
    });
    
    // Atualizar estatísticas
    atualizarEstatisticas}