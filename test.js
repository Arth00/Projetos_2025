const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});


console.log('Este é jogo da Palavra secreta!!'); 

const questName = (
    rl.question('Primeiramente, nos diga: Qual é o seu Nome? ',
         (respostaName)=> {
            console.log(`Olá, ${respostaName}! `); 

            const safeRespostaNm = {
                user: respostaName,
                data: new Date().toISOString(),
            }
            fs.readFile('registry.json', 'utf8', (err, data)=>{
                let respostas =[];

                if(!err && data) {
                    try{
                        respostas =JSON.parse(data);
                    } catch (e) {
                        console.warn('Arquivo Corrompido... recriando!')
                    }
                }

            respostas.push(safeRespostaNm);
            
            fs.writeFile('registry.json', JSON.stringify(respostas, null , 2),(err)=>{
                if(err) {
                    console.error('Erro ao Salvar: ', err);
                } else {
                    console.log('Resposta Salva com Sucesso!');
                }
            })
        })
    rl.close(); 
})
);
console.log(questName);

// Verificação se Houve o salvamento do Nome... tentativa de laço de repetição
/*
if (questName(respostaName)) {
    console.error('Houve algum erro... Nos informe novamente o seu nome: '); 
    console.log(questName);
} else {
    console.log('Vamos as Perguntas:');
}
*/




