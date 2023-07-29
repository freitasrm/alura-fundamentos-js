import chalk from 'chalk';
import fs from 'fs';

const log = console.log;
const aviso = chalk.bgRed.bold;
const padrao = chalk.greenBright.bgWhite.bold;

function trataErro(erro) {
    console.log(erro);
    throw new Error(aviso(erro.code, 'não há arquivo no diretório!'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promeses.readFile(caminhoDoArquivo, encoding) 
        .then((texto) => console.log(padrao(texto)))    
        .catch(trataErro)
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         log(padrao(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md')
