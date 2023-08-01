import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '202-01-01');
console.log(novoUser.exibirInfos());

novoUser.nome = 'Márcia';
console.log(novoUser.nome)
console.log(novoUser)
console.log(novoUser.exibirInfos());