import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '202-01-01');
console.log(novoUser.exibirInfos());



const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Reinaldo'
console.log(novoAdmin.nome)
console.log(novoAdmin)

const string1 = 'Abel'
const string2 = 'Calhim'
const string4 = 'Romario Amazonense dos Santos'
const string3 = [string1, ...string2]
const [string5, string6, ...string7] = string4.split(" ")
console.log('string3',string3)
console.log('string4',string4)
console.log('string5',string5)
console.log('string6',string6)
console.log('string6',string7)
console.log('string7', string7.join(" "))