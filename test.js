const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

console.log('Este é jogo da Palavra secreta!!'); 

const questName = (
    rl.question('Primeiramente, nos diga: Qual é o seu Nome? ' , 
        (respostaName)=> {
            console.log(`Olá, ${respostaName}!`); 
            rl.close(); 
})
);
console.log(questName);

