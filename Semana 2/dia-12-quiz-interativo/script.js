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

