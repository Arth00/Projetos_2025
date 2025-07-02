const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


const pergunta = (
    rl.question('Whats your Name? ', 
        (resposta)=>{
            console.log(`Hello, ${resposta}`);

            const salvarResposta = {
                user : resposta,
                data : new Date().toISOString(),
            }
            fs.readFile('registry.json', 'utf8', ()=>{
                let ArrayResposta = []; 
                ArrayResposta.push(salvarResposta);
                fs.writeFile('registry.json', JSON.stringify(ArrayResposta , null , 2), (err)=>{
                if(err) {
                    console.error('Erro ao Salvar: ', err);
                } else {
                    console.log('Resposta Salva com Sucesso!');
                }
            })
            })
        rl.close();
        // Tentando Resolver com fazer a busca no array e verificar se a resposta está correta - 01-07-2025
            const resultado = resposta.find()
    }) 
    );

console.log(pergunta); 




/*const dado = [1,2,3,4,5,6,7,8,9,10]; 

let arrayReceived = []; 

arrayReceived = dado.length > 0 ? dado : ["Nnehum dado encontrado"]; 


console.log(arrayReceived); 
*/


/*for(i = 0; condiçao; i++) {
     //transforma o registry.json pra leitura de array
     //pega a resposta do usuario
 
     //percorre cada item no array do registry
     if(resposta = array[i]) {
         achei, legal
      } else {
            i++, póximo
     }
 
    //nao achei a resposta?
    if(resposta nao achada) {
    console.warn/error()
    }
}
    */





