import chalk from 'chalk';
import fs from 'fs';

const log = console.log;
const aviso = chalk.bgRed.bold;
const padrao = chalk.greenBright.bgWhite.bold;

function extraiLinks(texto) {
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.]*.[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}

function trataErro(erro) {
    throw new Error(aviso(erro.code, 'não há arquivo no diretório!'));
}

// async / await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'))
    }
    
}

export default pegaArquivo;