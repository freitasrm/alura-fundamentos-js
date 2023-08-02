export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        // lógica de condicional
        return this.#nome;
    }
    
    get email() {
        // lógica de condicional
        return this.#email;
    }
    
    get nascimento() {
        // lógica de condicional
        return this.#nascimento;
    }
    
    get role() {
        // lógica de condicional
        return this.#role;
    }

    get ativo() {
        // lógica de condicional
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido')
        }
        this.#nome = novoNome;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }

    set role(novoRole) {
        this.#role = novoRole;
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}