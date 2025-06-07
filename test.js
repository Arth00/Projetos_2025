//const express = require('express'); 
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});


let msg = ('Olá! Este é o Jogo PALAVRA SECRETA!! ;)');

setTimeout(console.log(msg), 50); 
console.log(msg);

    rl.question('Qual é o seu Nome?' , (questao1)=> {

        console.log(`Olá, ${questao1}!`); 
        rl.close(); 
    })
