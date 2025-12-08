console.log("🚀 JavaScript Carregado - Dia 7!");

// ========================================
// PARTE 1: FUNÇÕES
// ========================================

// FUNÇÃO SEM PARÂMETRO E SEM RETORNO
function mostrarMensagem() {
    console.log("Olá! Esta é uma função simples.");
}

// FUNÇÃO COM PARÂMETRO
function saudar(nome) {
    console.log(`Olá, ${nome}! Bem-vindo!`);
}

// FUNÇÃO COM RETORNO
function somar(a, b) {
    const resultado = a + b;
    return resultado;
}

// FUNÇÃO QUE CALCULA IDADE
function calcularIdade(anoNascimento) {
    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;
    return idade;
}

// ARROW FUNCTION (forma moderna)
const dobrar = (numero) => {
    return numero * 2;
};

// ARROW FUNCTION SIMPLIFICADA
const triplicar = (numero) => numero * 3;

// TESTAR NO CONSOLE
console.log("=== TESTANDO FUNÇÕES ===");
mostrarMensagem();
saudar("Jhony");
console.log("5 + 3 =", somar(5, 3));
console.log("Idade:", calcularIdade(1994));
console.log("Dobro de 10:", dobrar(10));
console.log("Triplo de 5:", triplicar(5));

// ========================================
// PARTE 2: ARRAYS
// ========================================

// CRIAR ARRAY
const tecnologias = ["HTML", "CSS", "JavaScript", "React"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const misturado = ["Texto", 42, true, null];

// ACESSAR ELEMENTOS
console.log("=== ARRAYS ===");
console.log("Primeira tecnologia:", tecnologias[0]); // "HTML"
console.log("Terceira tecnologia:", tecnologias[2]); // "JavaScript"

// PROPRIEDADES E MÉTODOS BÁSICOS
console.log("Quantidade de tecnologias:", tecnologias.length);
console.log("Último elemento:", tecnologias[tecnologias.length - 1]);

// ADICIONAR ELEMENTOS
tecnologias.push("Node.js");        // Adiciona no final
console.log("Após push:", tecnologias);

tecnologias.unshift("Git");         // Adiciona no início
console.log("Após unshift:", tecnologias);

// REMOVER ELEMENTOS
tecnologias.pop();                  // Remove do final
console.log("Após pop:", tecnologias);

tecnologias.shift();                // Remove do início
console.log("Após shift:", tecnologias);

// VERIFICAR SE EXISTE
console.log("Tem JavaScript?", tecnologias.includes("JavaScript"));
console.log("Tem Python?", tecnologias.includes("Python"));

// ENCONTRAR ÍNDICE
console.log("Índice de CSS:", tecnologias.indexOf("CSS"));

// ========================================
// PARTE 3: LOOPS
// ========================================

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// 1. FOR TRADICIONAL
console.log("=== FOR TRADICIONAL ===");
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}

// 2. FOR...OF (mais moderno)
console.log("=== FOR...OF ===");
for (const fruta of frutas) {
    console.log(`Eu gosto de ${fruta}`);
}

// 3. WHILE
console.log("=== WHILE ===");
let contador = 1;
while (contador <= 5) {
    console.log(`Contagem: ${contador}`);
    contador++;
}

// LOOP COM BREAK
console.log("=== BREAK ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Parou no 5!");
        break; // Para o loop
    }
    console.log(i);
}

// LOOP COM CONTINUE
console.log("=== CONTINUE ===");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Pula o 3
    }
    console.log(i);
}

// ========================================
// PARTE 5: INTERAÇÃO COM HTML
// ========================================

// ELEMENTOS
const btnSaudar = document.getElementById('btn-saudar');
const btnCalcular = document.getElementById('btn-calcular');
const btnDobro = document.getElementById('btn-dobro');
const resultadoFuncoes = document.getElementById('resultado-funcoes');

const btnTecnologias = document.getElementById('btn-tecnologias');
const btnNumeros = document.getElementById('btn-numeros');
const btnPares = document.getElementById('btn-pares');
const resultadoArrays = document.getElementById('resultado-arrays');

const btnMap = document.getElementById('btn-map');
const btnFilter = document.getElementById('btn-filter');
const btnForEach = document.getElementById('btn-foreach');
const resultadoMetodos = document.getElementById('resultado-metodos');

// SEÇÃO 1: FUNÇÕES
btnSaudar.addEventListener('click', () => {
    const nome = "Jhony";
    const mensagem = saudar2(nome);
    resultadoFuncoes.textContent = mensagem;
});

function saudar2(nome) {
    return `👋 Olá, ${nome}! Seja bem-vindo!`;
}

btnCalcular.addEventListener('click', () => {
    const anoNascimento = 1994;
    const idade = calcularIdade(anoNascimento);
    resultadoFuncoes.textContent = `🎂 Você tem ${idade} anos (nasceu em ${anoNascimento})`;
});

btnDobro.addEventListener('click', () => {
    const numero = 15;
    const resultado = dobrar(numero);
    resultadoFuncoes.textContent = `➡️ O dobro de ${numero} é ${resultado}`;
});

// SEÇÃO 2: ARRAYS E LOOPS
btnTecnologias.addEventListener('click', () => {
    const minhasTecnologias = ["HTML", "CSS", "JavaScript", "React", "Git"];
    let texto = "📚 Minhas Tecnologias:<br><br>";
    
    minhasTecnologias.forEach((tech, index) => {
        texto += `${index + 1}. ${tech}<br>`;
    });
    
    resultadoArrays.innerHTML = texto;
});

btnNumeros.addEventListener('click', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    resultadoArrays.textContent = `🔢 Números: ${numeros.join(', ')}`;
});

btnPares.addEventListener('click', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = numeros.filter(num => num % 2 === 0);
    resultadoArrays.textContent = `✅ Números Pares: ${pares.join(', ')}`;
});

// SEÇÃO 3: MÉTODOS AVANÇADOS
btnMap.addEventListener('click', () => {
    const numeros = [1, 2, 3, 4, 5];
    const dobrados = numeros.map(num => num * 2);
    resultadoMetodos.innerHTML = `
        <strong>MAP - Dobrar valores:</strong><br>
        Original: [${numeros.join(', ')}]<br>
        Dobrado: [${dobrados.join(', ')}]
    `;
});

btnFilter.addEventListener('click', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const maiores = numeros.filter(num => num > 5);
    resultadoMetodos.innerHTML = `
        <strong>FILTER - Maiores que 5:</strong><br>
        Original: [${numeros.join(', ')}]<br>
        Filtrado: [${maiores.join(', ')}]
    `;
});

btnForEach.addEventListener('click', () => {
    const frutas = ["🍎 Maçã", "🍌 Banana", "🍊 Laranja"];
    let lista = "<strong>FOREACH - Listar:</strong><br><br>";
    
    frutas.forEach((fruta, index) => {
        lista += `${index + 1}. ${fruta}<br>`;
    });
    
    resultadoMetodos.innerHTML = lista;
});

// ========================================
// PARTE 6: LISTA DE TAREFAS
// ========================================

const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// Array para guardar as tarefas
let tarefas = [];

// Função para adicionar tarefa
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();
    
    // Validar input vazio
    if (textoTarefa === '') {
        alert('⚠️ Digite uma tarefa!');
        return;
    }
    
    // Adicionar no array
    tarefas.push(textoTarefa);
    
    // Limpar input
    inputTarefa.value = '';
    
    // Atualizar lista na tela
    renderizarTarefas();
}

// Função para renderizar tarefas
function renderizarTarefas() {
    // Limpar lista
    listaTarefas.innerHTML = '';
    
    // Adicionar cada tarefa
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${tarefa}</span>
            <button onclick="removerTarefa(${index})">Deletar ❌</button>
        `;
        
        listaTarefas.appendChild(li);
    });
}

// Função para remover tarefa
function removerTarefa(index) {
    tarefas.splice(index, 1); // Remove 1 item no índice
    renderizarTarefas();
}

// Event listeners
btnAdicionar.addEventListener('click', adicionarTarefa);

// Adicionar com Enter
inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});