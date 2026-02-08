console.log("🎯 Quiz Interativo - Carregando...");

// ========================================
// BANCO DE PERGUNTAS
// ========================================

const bancoPerguntas = {
    javascript: [
        {
            pergunta: "O que significa 'DOM' em JavaScript?",
            opcoes: [
                "Document Object Model",
                "Data Object Management",
                "Digital Online Method",
                "Document Oriented Memory"
            ],
            correta: 0,
            dificuldade: "facil"
        },
        {
            pergunta: "Qual método adiciona um elemento ao final de um array?",
            opcoes: ["push()", "pop()", "shift()", "unshift()"],
            correta: 0,
            dificuldade: "facil"
        },
        {
            pergunta: "Como declarar uma variável que não pode ser reatribuída?",
            opcoes: ["var", "let", "const", "define"],
            correta: 2,
            dificuldade: "facil"
        },
        {
            pergunta: "O que o método .map() retorna?",
            opcoes: [
                "Um novo array",
                "O array original modificado",
                "Um número",
                "Undefined"
            ],
            correta: 0,
            dificuldade: "medio"
        },
        {
            pergunta: "Qual é a diferença entre '==' e '==='?",
            opcoes: [
                "Não há diferença",
                "=== compara valor e tipo",
                "== é mais rápido",
                "=== não existe em JavaScript"
            ],
            correta: 1,
            dificuldade: "medio"
        },
        {
            pergunta: "O que é uma 'closure' em JavaScript?",
            opcoes: [
                "Uma função que fecha o navegador",
                "Uma função que tem acesso ao escopo externo",
                "Um método de fechar loops",
                "Um tipo de variável"
            ],
            correta: 1,
            dificuldade: "dificil"
        },
        {
            pergunta: "O que é 'hoisting'?",
            opcoes: [
                "Subir elementos na página",
                "Elevação de declarações para o topo do escopo",
                "Um método de hospedagem",
                "Uma biblioteca JavaScript"
            ],
            correta: 1,
            dificuldade: "dificil"
        },
        {
            pergunta: "Qual método remove o último elemento de um array?",
            opcoes: ["pop()", "push()", "slice()", "splice()"],
            correta: 0,
            dificuldade: "facil"
        },
        {
            pergunta: "O que faz o 'async/await'?",
            opcoes: [
                "Para o código",
                "Trabalha com código assíncrono",
                "Cria loops infinitos",
                "Não existe em JavaScript"
            ],
            correta: 1,
            dificuldade: "dificil"
        },
        {
            pergunta: "Como converter string em número?",
            opcoes: [
                "Number() ou parseInt()",
                "toString()",
                "stringify()",
                "convert()"
            ],
            correta: 0,
            dificuldade: "medio"
        }
    ],
    html: [
        {
            pergunta: "O que significa HTML?",
            opcoes: [
                "HyperText Markup Language",
                "HighTech Modern Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            correta: 0,
            dificuldade: "facil"
        },
        {
            pergunta: "Qual tag cria um link?",
            opcoes: ["<link>", "<a>", "<href>", "<url>"],
            correta: 1,
            dificuldade: "facil"
        },
        {
            pergunta: "Qual atributo especifica o destino de um link?",
            opcoes: ["src", "href", "link", "url"],
            correta: 1,
            dificuldade: "facil"
        },
        {
            pergunta: "Qual tag define um título de página?",
            opcoes: ["<head>", "<title>", "<header>", "<meta>"],
            correta: 1,
            dificuldade: "medio"
        },
        {
            pergunta: "HTML5 introduziu qual dessas tags?",
            opcoes: ["<article>", "<paragraph>", "<text>", "<div>"],
            correta: 0,
            dificuldade: "medio"
        }
    ],
    css: [
        {
            pergunta: "O que significa CSS?",
            opcoes: [
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            correta: 0,
            dificuldade: "facil"
        },
        {
            pergunta: "Como selecionar um elemento com id 'header'?",
            opcoes: [".header", "#header", "*header", "header"],
            correta: 1,
            dificuldade: "facil"
        },
        {
            pergunta: "Qual propriedade muda a cor de fundo?",
            opcoes: ["color", "bg-color", "background-color", "bgcolor"],
            correta: 2,
            dificuldade: "facil"
        },
        {
            pergunta: "O que é Flexbox?",
            opcoes: [
                "Um sistema de layout 1D",
                "Uma linguagem",
                "Um framework",
                "Um editor"
            ],
            correta: 0,
            dificuldade: "medio"
        },
        {
            pergunta: "Como centralizar um elemento com Flexbox?",
            opcoes: [
                "text-align: center",
                "justify-content: center",
                "align: center",
                "center: true"
            ],
            correta: 1,
            dificuldade: "medio"
        }
    ],
    geral: [
        {
            pergunta: "Quem criou o JavaScript?",
            opcoes: [
                "Brendan Eich",
                "Bill Gates",
                "Steve Jobs",
                "Mark Zuckerberg"
            ],
            correta: 0,
            dificuldade: "medio"
        },
        {
            pergunta: "O que é Git?",
            opcoes: [
                "Uma linguagem",
                "Um sistema de controle de versão",
                "Um framework",
                "Um banco de dados"
            ],
            correta: 1,
            dificuldade: "facil"
        },
        {
            pergunta: "O que significa API?",
            opcoes: [
                "Application Programming Interface",
                "Advanced Programming Integration",
                "Automated Program Interface",
                "Application Process Integration"
            ],
            correta: 0,
            dificuldade: "medio"
        },
        {
            pergunta: "Qual empresa desenvolve o navegador Chrome?",
            opcoes: ["Microsoft", "Apple", "Google", "Mozilla"],
            correta: 2,
            dificuldade: "facil"
        },
        {
            pergunta: "O que é um framework?",
            opcoes: [
                "Uma foto",
                "Uma estrutura reutilizável de código",
                "Um tipo de arquivo",
                "Um sistema operacional"
            ],
            correta: 1,
            dificuldade: "medio"
        }
    ]
};

// Variaveis Globais

let categoriaEscolhida = 'javascript';
let dificuldadeEscolhida = 'facil';
let perguntaQuiz = [];
let perguntaAtualIndez = 0;
let pontuacao = 0;
let acertos = 0;
let erros = 0;
let tempoInicio = 0;
let timerInterval = null;
let tempoRestante = 30;

// Elementos do DOM

// Telas
const talaInicial = document.getElementById('tela-inicial');
const telaQuiz = document.getElementById('tela-quiz');
const telaResultado = document.getElementById('tela-resultado');

// Tela Inicial
const btnsCategorias = document.querySelectorAll('.btn-categoria');
const btnsDificuldades = document.querySelectorAll('.btn-dificuldade');
const btnIniciar = document.getElementById('btn-iniciar');
const rankingLista = document.getElementById('ranking-lista');

// Tela Quiz

const quizCategoria = document.getElementById('quiz-categoria');
const quizDificuldade = document.getElementById('quiz-dificuldade');
const perguntaAtualEl = document.getElementById('pergunta-atual');
const totalPerguntasEl = document.getElementById('total-perguntas');
const pontosAtuaisEl = document.getElementById('pontos-atuais');
const tempoRestanteEl = document.getElementById('tempo-restante');
const progressFill = document.getElementById('progress-fill');
const perguntaTexto = document.getElementById('pergunta-texto');
const opcoesContainer = document.getElementById('opcoes-container');
const btnProxima = document.getElementById('btn-proxima');

// Tela Inicial
const btnsCategorias = document.querySelectorAll('.btn-categoria');
const btnsDificuldades = document.querySelectorAll('.btn-dificuldade');
const btnIniciar = document.getElementById('btn-iniciar');
const rankingLista = document.getElementById('ranking-lista');

// Tela Quiz
const quizCategoria = document.getElementById('quiz-categoria');
const quizDificuldade = document.getElementById('quiz-dificuldade');
const perguntaAtualEl = document.getElementById('pergunta-atual');
const totalPerguntasEl = document.getElementById('total-perguntas');
const pontosAtuaisEl = document.getElementById('pontos-atuais');
const tempoRestanteEl = document.getElementById('tempo-restante');
const progressFill = document.getElementById('progress-fill');
const perguntaTexto = document.getElementById('pergunta-texto');
const opcoesContainer = document.getElementById('opcoes-container');
const btnProxima = document.getElementById('btn-proxima');

// Iniciação

function inicializar() {
    configurarEventos();
    carregarRanking();
    console.log('✅ Quiz inicializado');
}

// Eventos

function configurarEventos() {
    // Categorias
    btnsCategorias.forEach(btn => {
        btn.addEventListener('click', () => {
            btnsCategorias.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            categoriaEscolhida = btn.dataset.categoria;
        });
    });
    
    // Dificuldades
    btnsDificuldades.forEach(btn => {
        btn.addEventListener('click', () => {
            btnsDificuldades.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            dificuldadeEscolhida = btn.dataset.dificuldade;
        });
    });
    // Iniciar Quiz
    btnIniciar.addEventListener('click', iniciarQuiz);
    
    // Próxima pergunta
    btnProxima.addEventListener('click', proximaPergunta);
    
    // Resultado
    btnJogarNovamente.addEventListener('click', () => {
        resetarQuiz();
        iniciarQuiz();
    });
    
    btnVoltarInicio.addEventListener('click', () => {
        resetarQuiz();
        trocarTela('inicial');
    });
}

//Iniciar Quiz

function iniciarQuiz() {
    console.log('🚀 Iniciando quiz...');
    console.log('Categoria:', categoriaEscolhida);
    console.log('Dificuldade:', dificuldadeEscolhida);
    
    // Filtrar perguntas
    const todasPerguntas = bancoPerguntas[categoriaEscolhida] || bancoPerguntas.javascript;
    perguntasQuiz = todasPerguntas.filter(p => p.dificuldade === dificuldadeEscolhida);
    
    // Se não houver perguntas suficientes, pegar todas
    if (perguntasQuiz.length < 5) {
        perguntasQuiz = todasPerguntas;
    }
    // Embaralhar e pegar 10
    perguntasQuiz = embaralhar(perguntasQuiz).slice(0, 10);
    
    // Resetar variáveis
    perguntaAtualIndex = 0;
    pontuacao = 0;
    acertos = 0;
    erros = 0;
    tempoInicio = Date.now();
    
    // Atualizar UI
    quizCategoria.textContent = categoriaEscolhida.toUpperCase();
    quizDificuldade.textContent = dificuldadeEscolhida.charAt(0).toUpperCase() + dificuldadeEscolhida.slice(1);
    totalPerguntasEl.textContent = perguntasQuiz.length;

    // Trocar tela
    trocarTela('quiz');
    
    // Mostrar primeira pergunta
    mostrarPergunta();
}

// Mostrar Pergunta
function mostrarPergunta() {
    if (perguntaAtualIndex >= perguntasQuiz.length) {
        finalizarQuiz();
        return;
    }
    
    const pergunta = perguntasQuiz[perguntaAtualIndex];
    
    // Atualizar header
    perguntaAtualEl.textContent = perguntaAtualIndex + 1;
    pontosAtuaisEl.textContent = pontuacao;
    
    // Atualizar progresso
    const progresso = ((perguntaAtualIndex + 1) / perguntasQuiz.length) * 100;
    progressFill.style.width = progresso + '%';
    
    // Mostrar pergunta
    perguntaTexto.textContent = pergunta.pergunta;
    
    // Limpar opções
    opcoesContainer.innerHTML = '';
    
    // Criar opções
    pergunta.opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.className = 'opcao';
        btn.textContent = opcao;
        btn.addEventListener('click', () => selecionarOpcao(index));
        opcoesContainer.appendChild(btn);
    });
      // Esconder botão próxima
    btnProxima.style.display = 'none';
    
    // Iniciar timer
    iniciarTimer();
    
    console.log('Pergunta', perguntaAtualIndex + 1, 'exibida');
}

// Selecionar Opção

function selecionarOpcao(index) {
    // Parar timer
    pararTimer();
    
    const pergunta = perguntasQuiz[perguntaAtualIndex];
    const opcoes = document.querySelectorAll('.opcao');
    
    // Desabilitar todas
    opcoes.forEach(op => {
        op.classList.add('disabled');
    });
    
    // Verificar resposta
    if (index === pergunta.correta) {
        // CORRETA
        opcoes[index].classList.add('correta');
        acertos++;
        
        // Calcular pontos (bonus por tempo)
        const bonus = Math.floor(tempoRestante / 3);
        pontuacao += 10 + bonus;
        
        console.log('✅ Resposta correta! +' + (10 + bonus) + ' pontos');
    } else {
        // INCORRETA
        opcoes[index].classList.add('incorreta');
        opcoes[pergunta.correta].classList.add('correta');
        erros++;
        
        console.log('❌ Resposta incorreta');
    }
    
    // Atualizar pontos
    pontosAtuaisEl.textContent = pontuacao;
    
    // Mostrar botão próxima
    btnProxima.style.display = 'block';
}

//Próxima Pergunta 

    function proximaPergunta() {
    perguntaAtualIndex++;
    mostrarPergunta();
}

// TIMER

function iniciarTimer() {
    tempoRestante = 30;
    tempoRestanteEl.textContent = tempoRestante;
    
    timerInterval = setInterval(() => {
        tempoRestante--;
        tempoRestanteEl.textContent = tempoRestante;
        
        // Mudar cor quando tempo está acabando
        if (tempoRestante <= 10) {
            tempoRestanteEl.style.color = '#e74c3c';
        } else {
            tempoRestanteEl.style.color = '#667eea';
        }
        
        // Tempo esgotado
        if (tempoRestante <= 0) {
            pararTimer();
            
            // Marcar como erro e mostrar resposta correta
            const pergunta = perguntasQuiz[perguntaAtualIndex];
            const opcoes = document.querySelectorAll('.opcao');
            
            opcoes.forEach(op => op.classList.add('disabled'));
            opcoes[pergunta.correta].classList.add('correta');
            
            erros++;
            btnProxima.style.display = 'block';
            
            console.log('⏰ Tempo esgotado!');
        }
    }, 1000);
}

function pararTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

//Finalizar quiz