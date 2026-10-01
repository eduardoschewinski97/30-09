const readline = require('node:readline/promises');
const {stdin: input, stdout: output} = require('node:process');

async function main() {

const rl = readline.createInterface({input, output});

let  soma = 0;

for(let i = 0; i < 5; i++) {
    const numero = Number(await rl.question(`Digite um número: `));
    soma = soma + numero;

}
let media = soma / 5;
console.log(`\nMedia dos números digitados: ${media}`);
rl.close();
};

main();