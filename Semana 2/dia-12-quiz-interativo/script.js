console.log("Quiz Interativo - Carregando");

// Banco de Perguntas

const bancoPerguntas = {
    javascript: [
        {
            pergunta: "O que significa 'DOM' em Javascript",
            opcoes:[
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
            pergunta: "Como declarar um variável que não pode ser reatribuída?",
            opcoes: ["var", "let", "const","define"],
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
            correta:0,
            dificuldade: "medio"
        },
        
    ]
}