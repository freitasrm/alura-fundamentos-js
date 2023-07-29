import chalk from 'chalk';
import fs from 'fs';

const log = console.log;
const aviso = chalk.bgRed.bold;
const padrao = chalk.greenBright.bgWhite.bold;

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        log(padrao(texto));
    })
}

pegaArquivo('./arquivos/texto.md')
