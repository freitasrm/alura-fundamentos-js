import chalk from 'chalk';
import fs from 'fs';

const log = console.log;
const aviso = chalk.bgRed.bold;
const padrao = chalk.greenBright.bgWhite.bold;

// const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks(texto) {
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.]*.[^\s]*)\)/gm;
    // const capturas = texto.match(regex)
    // const capturas = regex.exec(texto)
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    // log(resultados)
    return resultados;
}

// extraiLinks(textoTeste)

function trataErro(erro) {
    // console.log(erro);
    throw new Error(aviso(erro.code, 'não há arquivo no diretório!'));
}

// async / await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        // log(aviso(texto))
        log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'))
    }
    
}

// promises com then

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promeses.
//         readFile(caminhoDoArquivo, encoding) 
//         .then((texto) => console.log(padrao(texto)))    
//         .catch(trataErro)
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         log(padrao(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md');

// pegaArquivo('./arquivos/');

