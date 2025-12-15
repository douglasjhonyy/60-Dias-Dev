console.log("Javascript Carregando");

// PARTE 1: IF/ELSE

console.log("IF/ELSE");

//If simples
const idade= 20;

if (idade>=18){
    console.log("Maior de idade");
}

//If / Else
if (idade >= 18){
    console.log("Pode Dirigir");
} else {
    console.log("Não pode dirigir");
}

// IF/ELSE IF/ELSE (múltiplas condições)
const nota = 7.5;

if (nota >= 9){
    console.log("Exelente!");
} else if (nota >= 7) {
    console.log("Bom!");
} else if (nota >= 5){
    console.log("Regular!");
} else {
    console.log("Reprovado!");
}

// OPERADORES DE COMPARAÇÃO
console.log("=== OPERADORES ===");
console.log("5 == '5':", 5 == '5');     // true (compara valor)
console.log("5 === '5':", 5 === '5');   // false (compara valor E tipo)
console.log("5 != 6:", 5 != 6);         // true (diferente)
console.log("5 !== '5':", 5 !== '5');   // true (diferente em tipo)
console.log("5 > 3:", 5 > 3);           // true (maior)
console.log("5 < 3:", 5 < 3);           // false (menor)
console.log("5 >= 5:", 5 >= 5);         // true (maior ou igual)
console.log("5 <= 4:", 5 <= 4);         // false (menor ou igual)

// OPERADORES LÓGICOS

console.log("Operadores Lógicos");

// && (E) - Ambos precisam ser true

const temCNH = true;
const maiorIdade = true;

if (maiorIdade && temCNH){
    console.log("Pode dirigir"); // ✅ Executa
}

// || (OU) - Pelo menos um precisa ser true

const temCartao = false;
const temDinheiro = true;

if (temCartao || temDinheiro) {
    console.log("Pode Comprar!");  // ✅ Executa
}

// ! (NÃO) - Inverte o valor

const chovendo = false;

if (!chovendo) {
    console.log("Vou sair!"); // ✅ Executa (pois !false = true)
}

// COMBINANDO OPERADORES
const idade2 = 25;
const temExperiencia = true;
const temCarro = false;

if ((idade2 >= 21 && temExperiencia) || temCarro) {
    console.log("Pode trabalhar como motorista");
}

// OPERADOR TERNÁRIO (if/else em uma linha)
const idadeUser = 20;
const status = idadeUser >= 18 ? "Adulto" : "Menor";
console.log("Status:", status); 

// Ternário aninhado (evite fazer muito!)
const pontos = 85;
const conceito = pontos >= 90 ? "A" : pontos >= 80 ? "B" : pontos >= 70 ? "C" : "D";
console.log("Conceito:", conceito);

// PARTE 2: SWITCH/CASE

console.log("Switch/Case");

const diaSemana = 3;

switch (diaSemana){
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4: 
        console.log("Quinta-Feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6: 
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

// SWITCH com strings

const comando = "start";

switch (comando){
    case "start":
        console.log("Iniciando...");
        break;
    case "stop":
        console.log("Parando...");
        break;
    case "pause":
        console.log("Pausando...");
        break;
    default:
        console.log("Comando desconhecido");
}

// QUANDO USAR IF vs SWITCH?
// IF: Comparações complexas, ranges, operadores lógicos
// SWITCH: Múltiplas opções específicas, mais legível



// PARTE 3: INTERAÇÃO COM HTM

// ELEMENTOS - SEÇÃO IF/ELSE

const inputIdade = document.getElementById('input-idade');
const btnVerificarIdade = document.getElementById('btn-verificar-idade');
const resultadoIdade = document.getElementById('resultado-idade');

// ELEMENTOS - SEÇÃO SWITCH

const selectDia = document.getElementById('select-dia');
const btnVrificarDia = document.getElementById('btn-verificar-dia');
const resultadosdoDia = document.getElementById('resultado-dia');

// ELEMENTOS - SEÇÃO OPERADORES LÓGICOS
const checkMaiorIdade = document.getElementById('check-maior-idade');
const checkTemCNH = document.getElementById('check-tem-cnh');
const checkTemCarro = document.getElementById('check-tem-carro');
const btnVerificarRequisitos = document.getElementById('btn-verificar-requisitos');
const resultadoRequisitos = document.getElementById('resultado-requisitos');

// ELEMENTOS - SEÇÃO FORMULÁRIO
const formCadastro = document.getElementById('form-cadastro');
const resultadoForm = document.getElementById('resultado-form');

// ===== SEÇÃO 1: IF/ELSE - VERIFICAR IDADE =====

btnVerificarIdade.addEventListener('click', () => {
    const idade = parseInt(inputIdade.value);
    
    // Validar input
    if (isNaN(idade) || idade < 0) {
        resultadoIdade.innerHTML = '⚠️ Digite uma idade válida!';
        resultadoIdade.style.borderLeftColor = '#e74c3c';
        return;
    }
    
    let mensagem = '';
    let emoji = '';
    let cor = '';
    
    // Lógica de classificação
    if (idade < 12) {
        mensagem = "Criança";
        emoji = "👶";
        cor = "#3498db";
    } else if (idade < 18) {
        mensagem = "Adolescente (Menor de idade)";
        emoji = "🧒";
        cor = "#f39c12";
    } else if (idade < 60) {
        mensagem = "Adulto (Maior de idade)";
        emoji = "🧑";
        cor = "#2ecc71";
    } else {
        mensagem = "Idoso (Maior de idade)";
        emoji = "👴";
        cor = "#9b59b6";
    }
    
    // Verificações adicionais
    const podeDirigir = idade >= 18 ? " Pode tirar CNH" : " Não pode tirar CNH";
    const podeVotar = idade >= 16 ? " Pode votar" : " Não pode votar";
    const votoObrigatorio = (idade >= 18 && idade < 70) ? " Voto obrigatório" : "ℹ Voto facultativo";
    
    resultadoIdade.innerHTML = `
        <strong>${emoji} Idade: ${idade} anos - ${mensagem}</strong><br><br>
        ${podeDirigir}<br>
        ${podeVotar}<br>
        ${votoObrigatorio}
    `;
    resultadoIdade.style.borderLeftColor = cor;
});

// ===== SEÇÃO 2: SWITCH/CASE - DIA DA SEMANA =====

btnVerificarDia.addEventListener('click', () => {
    const dia = selectDia.value;
    
    if (dia === '') {
        resultadoDia.textContent = '⚠️ Escolha um dia!';
        return;
    }
    
    let programacao = '';
    let emoji = '';
    
    switch (dia) {
        case '1':
            programacao = "Segunda-feira: Estudar JavaScript 2h ";
            emoji = "📚";
            break;
        case '2':
            programacao = "Terça-feira: Praticar código 2h ";
            emoji = "⌨️";
            break;
        case '3':
            programacao = "Quarta-feira: Revisar projetos 2h ";
            emoji = "🔎";
            break;
        case '4':
            programacao = "Quinta-feira: Aprender React 2h ";
            emoji = "⚛️";
            break;
        case '5':
            programacao = "Sexta-feira: Projeto prático 2h ";
            emoji = "🚀";
            break;
        case '6':
            programacao = "Sábado: Projeto grande 4h";
            emoji = "🎯";
            break;
        case '7':
            programacao = "Domingo: Revisar semana 2h ";
            emoji = "📝";
            break;
        default:
            programacao = "Dia inválido";
            emoji = "❓";
    }
    
    resultadoDia.innerHTML = `
        <strong>${emoji} ${programacao}</strong>
    `;
});

// ===== SEÇÃO 3: OPERADORES LÓGICOS =====

btnVerificarRequisitos.addEventListener('click', () => {
    const maiorIdade = checkMaiorIdade.checked;
    const temCNH = checkTemCNH.checked;
    const temCarro = checkTemCarro.checked;
    
    let resultado = '';
    
    // && (E) - Todos precisam ser true
    if (maiorIdade && temCNH && temCarro) {
        resultado = " APROVADO! Você pode trabalhar como motorista de aplicativo!";
        resultadoRequisitos.style.borderLeftColor = '#2ecc71';
    } 
    // || (OU) - Pelo menos um true
    else if (maiorIdade && (temCNH || temCarro)) {
        resultado = " PARCIALMENTE APROVADO. Você precisa de:";
        if (!temCNH) resultado += "<br> CNH";
        if (!temCarro) resultado += "<br> Carro próprio";
        resultadoRequisitos.style.borderLeftColor = '#f39c12';
    }
    // ! (NÃO) - Nenhum requisito
    else {
        resultado = " REPROVADO. Requisitos faltando:";
        if (!maiorIdade) resultado += "<br> Ser maior de idade";
        if (!temCNH) resultado += "<br> Ter CNH";
        if (!temCarro) resultado += "<br> Ter carro";
        resultadoRequisitos.style.borderLeftColor = '#e74c3c';
    }
    
    resultadoRequisitos.innerHTML = resultado;
});

// ===== SEÇÃO 4: VALIDAÇÃO DE FORMULÁRIO =====

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede envio do formulário
    
    const nome = document.getElementById('input-nome-completo').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const senha = document.getElementById('input-senha').value;
    const confirmarSenha = document.getElementById('input-confirmar-senha').value;
    
    // Array para armazenar erros
    let erros = [];
    
    // VALIDAÇÃO 1: Nome completo (mínimo 2 palavras)
    if (nome.split(' ').length < 2) {
        erros.push(" Digite seu nome completo");
    }
    
    // VALIDAÇÃO 2: Email válido (regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erros.push(" Email inválido");
    }
    
    // VALIDAÇÃO 3: Senha mínimo 6 caracteres
    if (senha.length < 6) {
        erros.push(" Senha deve ter no mínimo 6 caracteres");
    }
    
    // VALIDAÇÃO 4: Senhas coincidem
    if (senha !== confirmarSenha) {
        erros.push(" Senhas não coincidem");
    }
    
    // VALIDAÇÃO 5: Senha forte (opcional - bonus!)
    const temNumero = /\d/.test(senha);
    const temLetra = /[a-zA-Z]/.test(senha);
    
    if (!temNumero || !temLetra) {
        erros.push(" Recomendado: senha com letras E números");
    }
    
    // EXIBIR RESULTADO
    if (erros.length > 0) {
        // TEM ERROS
        resultadoForm.innerHTML = `
            <strong> Corrija os seguintes erros:</strong><br><br>
            ${erros.join('<br>')}
        `;
        resultadoForm.style.borderLeftColor = '#e74c3c';
    } else {
        // SUCESSO!
        resultadoForm.innerHTML = `
            <strong>✅ Cadastro realizado com sucesso!</strong><br><br>
            Nome: ${nome}<br>
            Email: ${email}<br>
            Senha: ${'*'.repeat(senha.length)} (segura ✅)
        `;
        resultadoForm.style.borderLeftColor = '#2ecc71';
        
        // Limpar formulário
        formCadastro.reset();
    }
});

// ========================================
// CALCULADORA PROFISSIONAL - VERSÃO FINAL
// ========================================

const display = document.getElementById('display');
const listaHistorico = document.getElementById('lista-historico');

// VARIÁVEIS GLOBAIS
let valorAtual = '';
let valorAnterior = '';
let operacao = null;
let historico = [];

// ========================================
// INICIALIZAÇÃO
// ========================================

function inicializarCalculadora() {
    // Carregar histórico do localStorage
    const historicoSalvo = localStorage.getItem('historicoCalculadora');
    
    if (historicoSalvo) {
        try {
            historico = JSON.parse(historicoSalvo);
            renderizarHistorico();
        } catch (error) {
            console.error('Erro ao carregar histórico:', error);
            historico = [];
        }
    }
    
    atualizarDisplay();
    console.log('✅ Calculadora inicializada!');
}

// ========================================
// FUNÇÕES PRINCIPAIS
// ========================================

/**
 * Adiciona número ou ponto decimal ao valor atual
 */
function adicionarNumero(numero) {
    // Prevenir múltiplos pontos decimais
    if (numero === '.' && valorAtual.includes('.')) {
        return;
    }
    
    // Limitar tamanho do display (12 caracteres)
    if (valorAtual.length >= 12) {
        mostrarAviso('Limite de caracteres atingido');
        return;
    }
    
    // Se o valor atual é "0", substitui ao invés de concatenar
    if (valorAtual === '0' && numero !== '.') {
        valorAtual = numero;
    } else {
        valorAtual += numero;
    }
    
    atualizarDisplay();
}

/**
 * Define a operação matemática
 */
function adicionarOperador(op) {
    // Se não tem valor atual, não faz nada
    if (valorAtual === '') {
        return;
    }
    
    // Se já existe uma operação pendente, calcula primeiro
    if (valorAnterior !== '' && operacao !== null) {
        calcular();
    }
    
    // Salva operação e move valor atual para anterior
    operacao = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

/**
 * Executa o cálculo
 */
function calcular() {
    // Validações básicas
    if (valorAnterior === '' || valorAtual === '' || operacao === null) {
        return;
    }
    
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);
    let resultado;
    
    // Validar se são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        mostrarAviso('Valores inválidos!');
        limparDisplay();
        return;
    }
    
    // Executar operação baseado no operador
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
            
        case '-':
            resultado = num1 - num2;
            break;
            
        case '*':
            resultado = num1 * num2;
            break;
            
        case '/':
            // Validação especial: divisão por zero
            if (num2 === 0) {
                mostrarAviso('❌ Erro: Divisão por zero não permitida!');
                limparDisplay();
                return;
            }
            resultado = num1 / num2;
            break;
            
        default:
            console.error('Operação inválida:', operacao);
            return;
    }
    
    // Arredondar para evitar erros de ponto flutuante
    // Ex: 0.1 + 0.2 = 0.30000000000000004
    resultado = Math.round(resultado * 100000000) / 100000000;
    
    // Salvar no histórico
    adicionarAoHistorico(num1, operacao, num2, resultado);
    
    // Atualizar valores
    valorAtual = resultado.toString();
    valorAnterior = '';
    operacao = null;
    
    atualizarDisplay();
}

/**
 * Calcula porcentagem do valor atual
 */
function calcularPorcentagem() {
    if (valorAtual === '') {
        return;
    }
    
    const num = parseFloat(valorAtual);
    
    if (isNaN(num)) {
        mostrarAviso('Valor inválido para porcentagem');
        return;
    }
    
    // Se tem operação anterior, calcula porcentagem baseado nela
    if (valorAnterior !== '' && operacao) {
        const base = parseFloat(valorAnterior);
        valorAtual = ((base * num) / 100).toString();
    } else {
        // Senão, divide por 100
        valorAtual = (num / 100).toString();
    }
    
    atualizarDisplay();
}

/**
 * Limpa o display completamente
 */
function limparDisplay() {
    valorAtual = '';
    valorAnterior = '';
    operacao = null;
    atualizarDisplay();
}

/**
 * Remove o último caractere digitado
 */
function apagarUltimo() {
    if (valorAtual.length > 0) {
        valorAtual = valorAtual.slice(0, -1);
        atualizarDisplay();
    }
}

/**
 * Inverte o sinal do número (positivo/negativo)
 */
function inverterSinal() {
    if (valorAtual === '') {
        return;
    }
    
    const num = parseFloat(valorAtual);
    
    if (isNaN(num)) {
        return;
    }
    
    valorAtual = (num * -1).toString();
    atualizarDisplay();
}

// ========================================
// FUNÇÕES DE DISPLAY
// ========================================

/**
 * Atualiza o display com o valor atual
 */
function atualizarDisplay() {
    if (valorAtual === '') {
        display.value = '0';
    } else {
        // Formatar números grandes com separadores (opcional)
        const numero = parseFloat(valorAtual);
        if (!isNaN(numero) && Math.abs(numero) >= 1000) {
            display.value = numero.toLocaleString('pt-BR', { maximumFractionDigits: 8 });
        } else {
            display.value = valorAtual;
        }
    }
}

/**
 * Mostra aviso temporário no display
 */
function mostrarAviso(mensagem) {
    const valorAnteriorDisplay = display.value;
    display.value = mensagem;
    
    setTimeout(() => {
        display.value = valorAnteriorDisplay;
    }, 2000);
}

// ========================================
// FUNÇÕES DE HISTÓRICO
// ========================================

/**
 * Adiciona cálculo ao histórico
 */
function adicionarAoHistorico(num1, operador, num2, resultado) {
    const calculo = {
        id: Date.now(),
        expressao: `${formatarNumero(num1)} ${getOperadorSimbolo(operador)} ${formatarNumero(num2)}`,
        resultado: formatarNumero(resultado),
        data: new Date().toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    // Adiciona no início do array
    historico.unshift(calculo);
    
    // Limitar histórico a 10 últimos cálculos
    if (historico.length > 10) {
        historico = historico.slice(0, 10);
    }
    
    salvarHistorico();
    renderizarHistorico();
}

/**
 * Renderiza o histórico na tela
 */
function renderizarHistorico() {
    listaHistorico.innerHTML = '';
    
    if (historico.length === 0) {
        listaHistorico.innerHTML = `
            <li style="text-align:center; opacity:0.6; padding:20px;">
                📝 Nenhum cálculo realizado ainda
            </li>
        `;
        return;
    }
    
    historico.forEach((item) => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong style="font-size:1.1em;">${item.expressao} = ${item.resultado}</strong><br>
                    <small style="opacity:0.7; font-size:0.85em;">🕐 ${item.data}</small>
                </div>
                <button 
                    onclick="usarResultado('${item.resultado}')" 
                    style="background:#4caf50; padding:5px 10px; font-size:0.85em;"
                    title="Usar este resultado"
                >
                    Usar
                </button>
            </div>
        `;
        
        li.style.cursor = 'pointer';
        li.style.transition = 'background 0.2s ease';
        
        // Hover effect
        li.addEventListener('mouseenter', () => {
            li.style.background = '#e8f5e9';
        });
        
        li.addEventListener('mouseleave', () => {
            li.style.background = '#f8f9fa';
        });
        
        listaHistorico.appendChild(li);
    });
}

/**
 * Usa um resultado do histórico
 */
function usarResultado(resultado) {
    valorAtual = resultado.replace(/\./g, '').replace(',', '.');
    valorAnterior = '';
    operacao = null;
    atualizarDisplay();
}

/**
 * Salva histórico no localStorage
 */
function salvarHistorico() {
    try {
        localStorage.setItem('historicoCalculadora', JSON.stringify(historico));
    } catch (error) {
        console.error('Erro ao salvar histórico:', error);
    }
}

/**
 * Limpa todo o histórico
 */
function limparHistorico() {
    if (historico.length === 0) {
        mostrarAviso('O histórico já está vazio!');
        return;
    }
    
    if (confirm('⚠️ Deseja realmente limpar todo o histórico?')) {
        historico = [];
        salvarHistorico();
        renderizarHistorico();
        mostrarAviso('🗑️ Histórico limpo!');
    }
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

/**
 * Retorna símbolo visual do operador
 */
function getOperadorSimbolo(operador) {
    const simbolos = {
        '+': '+',
        '-': '−',
        '*': '×',
        '/': '÷'
    };
    
    return simbolos[operador] || operador;
}

/**
 * Formata número para exibição
 */
function formatarNumero(num) {
    // Remove zeros desnecessários
    const numero = parseFloat(num);
    
    if (isNaN(numero)) {
        return num;
    }
    
    // Se for número grande, formata com separadores
    if (Math.abs(numero) >= 1000) {
        return numero.toLocaleString('pt-BR', { maximumFractionDigits: 8 });
    }
    
    // Remove zeros à direita de decimais
    return numero.toString();
}

// ========================================
// SUPORTE A TECLADO
// ========================================

document.addEventListener('keydown', (e) => {
    // Prevenir comportamentos padrão em alguns casos
    if (['+', '-', '*', '/', 'Enter', '='].includes(e.key)) {
        e.preventDefault();
    }
    
    // NÚMEROS (0-9)
    if (e.key >= '0' && e.key <= '9') {
        adicionarNumero(e.key);
    }
    
    // PONTO DECIMAL (. ou ,)
    else if (e.key === '.' || e.key === ',') {
        adicionarNumero('.');
    }
    
    // OPERADORES
    else if (e.key === '+') {
        adicionarOperador('+');
    }
    else if (e.key === '-') {
        adicionarOperador('-');
    }
    else if (e.key === '*') {
        adicionarOperador('*');
    }
    else if (e.key === '/') {
        adicionarOperador('/');
    }
    
    // CALCULAR (Enter ou =)
    else if (e.key === 'Enter' || e.key === '=') {
        calcular();
    }
    
    // APAGAR (Backspace)
    else if (e.key === 'Backspace') {
        apagarUltimo();
    }
    
    // LIMPAR (Escape ou Delete)
    else if (e.key === 'Escape' || e.key === 'Delete') {
        limparDisplay();
    }
    
    // PORCENTAGEM (%)
    else if (e.key === '%') {
        calcularPorcentagem();
    }
});

// ========================================
// INICIALIZAÇÃO AUTOMÁTICA
// ========================================

// Inicializar quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    inicializarCalculadora();
});

// Log de informações úteis
console.log('🔢 CALCULADORA PROFISSIONAL');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('💡 ATALHOS DE TECLADO:');
console.log('   • Números: 0-9');
console.log('   • Operadores: + - * /');
console.log('   • Calcular: Enter ou =');
console.log('   • Apagar: Backspace');
console.log('   • Limpar: Esc ou Delete');
console.log('   • Porcentagem: %');
console.log('   • Ponto decimal: . ou ,');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Sistema carregado com sucesso!');