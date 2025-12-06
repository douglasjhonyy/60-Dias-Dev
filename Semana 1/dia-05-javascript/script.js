// Interação com Botões 

//1. pegar elementos HTML

const btnNome = document.getElementById('btn-nome');
const btnIdade = document.getElementById('btn-idade');
const btnSoma = document.getElementById('btn-soma');
const btnLimpar = document.getElementById('btn-limpar');
const resultado = document.getElementById('resultado');

//2. adicionar "Escutadores" de evento

//Botões Nome
btnNome.addEventListener('click', function(){
    const meuNome = "Jhony";
    resultado.textContent = `Meu nome é ${meuNome}!`; //Aqui se deve usar aspas contraria
    console.log("Botão 'Meu Nome' clicado!")
})

//Botão Idade
btnIdade.addEventListener('click', function(){
    const minhaIdade = 30;
    const anoAtual = 2025;
    const anoNascimento = anoAtual - minhaIdade;
    
    resultado.textContent = `tenho ${minhaIdade} anos! Nasci em ${anoNascimento}.`;
    console.log("Botão 'Minha Idade' clicando")
})

//Botão Soma
btnSoma.addEventListener('click', function(){
    const num1 = 10;
    const num2 = 5;
    const soma = num1 + num2;

    resultado.textContent = `${num1} + ${num2} = ${soma}`;
    console.log("Botão 'Soma' clicado!");
})

//Botão Limpar
btnLimpar.addEventListener('click', function(){
    resultado.textContent = '';
    console.log("Resultado Limpo!");
})

