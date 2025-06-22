const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

console.log('Este é o Jogo Palavra Secrete! aqui vai algumas perguntas...');

rl.question('Qual és tú nombre? ', (respostaName) => {
    console.log(`Hola mi Cabrón, ${respostaName}`);
    
    const safeResposta = {
        user: respostaName,
        data: new Date().toISOString(),
    }
    fs.readFile('registry.json', 'utf8', (err, data)=>{
        let respostas = [];

        if (!err && data) {
            try{
                respostas = JSON.parse(data);
            }   catch (e) {
                console.warn('Arquivo Corrompido... recriando!')
            }
        } 

        respostas.push(safeResposta);

        fs.writeFile('registry.json', JSON.stringify(respostas, null, 2), (err) => {
            if (err) {
                console.error('Erro ao Salvar: ', err);
            } else {
                console.log('Resposta Salva em array!');
            }

            rl.close();
        });
    });
});























//const quest1 = (
/*    rl.question('Qual é o seu nome: ', (respostaName) => {
        console.log(`Olá, ${respostaName}!`);

        const guardarResp = {
            user: respostaName,
            data: new Date().toISOString(),
            };
    })
//);

        fs.readFile('registry.json', 'utf8', (err, data) => {
            let respostas = [];

            if (!err && data) {
                try{
                    respostas = JSON.parse(data);
                } catch (e) {
                    console.warn('Arquivo Corrompido! recriando....');
                }
            }
        
        //adicionar uma nova resposta no array
        respostas.push(guardarResp); 

        //salva de o array  completo com as informações no arquivo
        fs.writeFile('registry.json', JSON.stringify(respostas, null, 2),(err)=>{
            if (err){
                console.error('erro ao salvar resposta: ', err);
            } else {
                console.log('Resposta salva com sucesso!');
            }
        rl.close(); 
        });

    });
*/

