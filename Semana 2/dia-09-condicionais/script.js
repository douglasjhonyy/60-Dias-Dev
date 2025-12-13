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