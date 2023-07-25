const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        // forma padrão
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        // forma concisa
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno =medias[indice]
                
        console.log(`${aluno} está cadastrado!`);
        console.log(`${aluno} tem a média ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("caio")