const prompt = require('readline-sync').question

// Q1 - Cálculo de Fatorial
function calcularFatorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

// Q2 - Identificar Número Primo
function ePrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Q3 - Sequência de Fibonacci (Array)
function fibonacciArray(n) {
    let seq = [0, 1];
    if (n <= 0) return [];
    if (n === 1) return [0];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

// Q4 - N-ésimo Termo de Fibonacci
function nEsimoFibonacci(n) {
    let a = 0, b = 1, temp;
    if (n === 1) return 0;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}

// Q5 - Tabuada
function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Q6 - Sequência de Collatz
function collatz(n) {
    let etapas = 0;
    while (n !== 1) {
        if (n % 2 === 0) n /= 2;
        else n = (n * 3) + 1;
        etapas++;
    }
    return etapas;
}

// Q7 - Simulador de Dados
function simuladorDados() {
    let tentativas = 0;
    let resultado;
    do {
        resultado = Math.floor(Math.random() * 6) + 1;
        tentativas++;
    } while (resultado !== 6);
    return tentativas;
}
function menuPrincipal() {
    let opcao;
    do {
        console.log("\n--- SISTEMA INTEGRADO ---");
        console.log("1 - Verificar Número Primo");
        console.log("2 - Calcular Fatorial");
        console.log("3 - Exibir N-ésimo termo de Fibonacci");
        console.log("4 - Sequência de Fibonacci (Array)");
        console.log("5 - Sequência de Collatz");
        console.log("6 - Tabuada");
        console.log("7 - Simular Dado (Até cair 6)");
        console.log("0 - Sair do Sistema");
        
        opcao = prompt("Escolha uma opção: ");

        switch(opcao) {
            case "1":
                let numPrimo = parseInt(prompt("Digite um número: "));
                console.log(ePrimo(numPrimo) ? "É primo!" : "Não é primo.");
                break;
            case "2":
                let numFat = parseInt(prompt("Digite um número: "));
                console.log("Fatorial: " + calcularFatorial(numFat));
                break;
            case "3":
                let nFib = parseInt(prompt("Qual posição de Fibonacci deseja? "));
                console.log("O termo é: " + nEsimoFibonacci(nFib));
                break;
            case "4":
                let qtdFib = parseInt(prompt("Quantos elementos da sequência? "));
                console.log("Sequência: " + fibonacciArray(qtdFib).join(", "));
                break;
            case "5":
                let nCollatz = parseInt(prompt("Digite um número para Collatz: "));
                console.log("Total de etapas: " + collatz(nCollatz));
                break;
            case "6":
                let numTab = parseInt(prompt("Deseja a tabuada de qual número? "));
                tabuada(numTab);
                break;
            case "7":
                console.log("Rodando dados...");
                console.log("Foram necessárias " + simuladorDados() + " tentativas para tirar o 6!");
                break;
            case "0":
                console.log("Saindo do sistema... Até logo!");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
            }
        } while (opcao !== "0");
    }
    
    
    menuPrincipal();
    