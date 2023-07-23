// parametros de função

function soma(numero1 = 0, numero2 = 0){
    return numero1 + numero2;
}

console.log(soma(2,2));
console.log(soma(245,20));
console.log(soma(-500,60));

// parametros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(40,"Julina"));

function multiplica (numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5),soma(3,3)))
console.log(multiplica(soma(4,5)))

function cumprimentar(){
    console.log('oi gente!')
   }
   
cumprimentar()

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
cumprimentaPessoa('Helena')

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”