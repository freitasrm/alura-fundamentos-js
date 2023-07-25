const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11333333000", "12221312312"]
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

//sem sintaxe de espalhamento
//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

//com sintaxe de espalhamento
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    // forma1
    //endereco: cliente.enderecos[0],

    // forma2
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,

    // com espalhamento
    ...cliente.enderecos[0],
}

console.log(encomenda);