let altura = 180;
{
    let peso = 70;
    console.log(`Altura: ${altura}, Peso: ${peso}`);
}
//console.log(`Altura: ${altura}`);
//Geraria um erro pois a altura está definida somente no bloco.

str="Olá, Mundo!";
console.log(str);
// A variável str é declarada sem o uso de let, var ou const, o que a torna uma variável global.
str.length; // Acessando a propriedade length da string str
idade = 25;
ano = 2025;
nascimento = ano - idade;
console.log(`Você nasceu em ${nascimento}`);

str.slice(0, 3); // Retorna os primeiros 3 caracteres da string str

str.split(" "); // Divide a string str em um array de palavras

var x = 1;
x+=10
console.log(x); // Imprime 11, pois x foi incrementado em 10

var y = 2**x;
console.log(y); // Imprime 2048, pois 2 elevado a 11 é 2048

//&& and
// || or
// ! not

// if (condicao) {
//Código a ser executado se a condição for verdadeira
// } else { 

let pecas_precos=10;
let pecas=prompt("Quantas peças você quer comprar?");
if (pecas_precos > 0) {
    let total= pecas_precos * pecas;
    console.log(`O total da compra é: R$ ${total}`);
}

let idade1 = prompt("Qual a sua idade?");
if (idade1 >= 18 && idade1 < 120) {
    console.log("Você é maior de idade.");
}
else if (idade1 < 18) {
    console.log("Você é menor de idade.");
}
else {
    console.log("Idade inválida.");
}

//switch (expressão) {
//case resultado 1:
// Código a ser executado se a expressão for igual ao resultado 1
// break;

let estado = prompt("Qual o estado? (SP, RJ, MG, ES)");
switch (estado) {
    case "SP":
        console.log("São Paulo");
        break;
    case "RJ":
        console.log("Rio de Janeiro");
        break;
    case "MG":
        console.log("Minas Gerais");
        break;
    case "ES":
        console.log("Espírito Santo");
        break;
    default: // Se nenhum dos casos acima for verdadeiro
        console.log("Estado inválido.");
}

//for (inicialização; condição; incremento) //serve para quando sabemos o número de iterações
for (let i = 0; i <= 5; i++) {
    console.log(`Contagem: ${i}`);
}

//while (condição) {codigo}//serve para quando não sabemos o número de iterações
let contador = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

//do {codigo} while (condição); //executa pelo menos uma vez
let contador2 = 0;  
do { //semelhante ao while, mas a condição é verificada após a execução do bloco
    console.log(`Contador2: ${contador2}`);
    contador2++;
} while (contador2 < 5);