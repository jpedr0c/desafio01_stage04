const numberOne = Number(prompt("Digite o primeiro número:"));
const numberTwo = Number(prompt("Digite o segundo número:"));
const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + subtraction);
alert("A multiplicação dos dois números é: " + multiplication);
alert("A divisão dos dois números é: " + division);
alert("O resto da divisão dos dois números é: " + rest);

if (sum % 2 == 0){
    alert("A soma dos dois números é par: " + sum);
} else{
    alert("A soma dos dois números é ímpar: " + sum);
}

if (numberOne == numberTwo){
    alert("Os números inseridos são iguais");
} else{
    alert("Os números inseridos são diferentes");
}