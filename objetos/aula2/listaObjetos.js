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

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

// console.log(cliente);
// console.log(cliente.enderecos);
console.log(listaApenasApartamentos);

