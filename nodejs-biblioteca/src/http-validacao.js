function extraiLnks(arrLinks) {
    //loop
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

export default function listaValidada(listaDeLinks) {
    return extraiLnks(listaDeLinks);
}